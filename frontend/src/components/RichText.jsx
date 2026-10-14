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
      className={`mt-2 pl-5 ${block.format === "ordered" ? "list-decimal" : "list-disc"}`}
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
        <Tag key={index} className="font-bold text-xl mt-4 mb-2">
          {renderInline(children)}
        </Tag>
      );
    }
    case "list":
      return renderList(block, index);
    case "quote":
      return (
        <blockquote key={index} className="mt-2 pl-4 border-l-4 border-secondary italic">
          {renderInline(children)}
        </blockquote>
      );
    case "code":
      return (
        <pre key={index} className="mt-2 p-3 bg-secondary overflow-x-auto text-sm">
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
          className="mt-2 max-w-full h-auto"
          loading="lazy"
        />
      ) : null;
    case "paragraph":
    default:
      if (isEmpty(children)) return <div key={index} className="h-4" />;
      return (
        <p key={index} className="mt-1">
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
