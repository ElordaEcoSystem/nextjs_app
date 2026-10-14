// Отрисовка поля Strapi типа "blocks"
import { mediaUrl } from "@/app/[locale]/needed/services";

const renderText = (node, key) => {
  let content = node.text;
  if (!content) return null;
  if (node.code) content = <code>{content}</code>;
  if (node.strikethrough) content = <s>{content}</s>;
  if (node.underline) content = <u>{content}</u>;
  if (node.italic) content = <em>{content}</em>;
  if (node.bold) content = <strong>{content}</strong>;
  return <span key={key}>{content}</span>;
};

const renderInline = (children = []) =>
  children.map((child, i) => {
    if (child.type === "link") {
      const external = /^https?:\/\//.test(child.url ?? "");
      return (
        <a
          key={i}
          href={child.url}
          className="underline text-prime hover:opacity-80"
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {renderInline(child.children)}
        </a>
      );
    }
    return renderText(child, i);
  });

const isEmpty = (children = []) =>
  children.every((child) => child.type !== "link" && !child.text);

const renderList = (block, key) => {
  const ListTag = block.format === "ordered" ? "ol" : "ul";
  return (
    <ListTag
      key={key}
      className={`mt-4 first:mt-0 pl-5 space-y-1.5 ${block.format === "ordered" ? "list-decimal" : "list-disc"}`}
    >
      {block.children?.map((item, i) =>
        item.type === "list" ? (
          renderList(item, i)
        ) : (
          <li key={i}>{renderInline(item.children)}</li>
        )
      )}
    </ListTag>
  );
};

const renderBlock = (block, index) => {
  const children = block.children ?? [];

  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level ?? 2}`;
      return (
        <Tag key={index} className="text-h3 font-bold text-prime mt-8 first:mt-0">
          {renderInline(children)}
        </Tag>
      );
    }
    case "list":
      return renderList(block, index);
    case "quote":
      return (
        <blockquote key={index} className="mt-4 first:mt-0 pl-4 border-l-4 border-leaf italic">
          {renderInline(children)}
        </blockquote>
      );
    case "code":
      return (
        <pre key={index} className="mt-4 first:mt-0 p-3 bg-secondary overflow-x-auto text-sm">
          {children.map((child) => child.text).join("")}
        </pre>
      );
    case "image":
      return block.image?.url ? (
        // eslint-disable-next-line @next/next/no-img-element -- размеры произвольные, картинка из Strapi
        <img
          key={index}
          src={mediaUrl(block.image.url)}
          alt={block.image.alternativeText ?? ""}
          className="mt-6 first:mt-0 max-w-full h-auto"
          loading="lazy"
        />
      ) : null;
    case "paragraph":
    default:
      // Пустые абзацы редакторы ставят как отступ — ритм задают сами отступы абзацев
      if (isEmpty(children)) return null;
      return (
        <p key={index} className="mt-4 first:mt-0">
          {renderInline(children)}
        </p>
      );
  }
};

export const RichText = ({ content, className = "" }) => {
  if (!content || !Array.isArray(content)) return null;
  return (
    <div className={className}>
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
};
