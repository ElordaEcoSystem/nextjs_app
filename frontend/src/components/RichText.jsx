// Отрисовка поля Strapi типа "blocks"
import { publicMediaUrl } from "@/app/[locale]/needed/services";
import { ListMarker, BULLET_PREFIX, NUMBER_PREFIX } from "./ListMarker";

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
  const ordered = block.format === "ordered";
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag
      key={key}
      className={`mt-4 first:mt-0 space-y-2 ${ordered ? "list-decimal pl-5" : ""}`}
    >
      {block.children?.map((item, i) =>
        item.type === "list" ? (
          renderList(item, i)
        ) : ordered ? (
          <li key={i}>{renderInline(item.children)}</li>
        ) : (
          <li key={i} className="relative pl-5">
            <ListMarker />
            {renderInline(item.children)}
          </li>
        )
      )}
    </ListTag>
  );
};

// Убирает маркер («•», «–», «1.») в начале первого текстового фрагмента абзаца
const stripPrefix = (children, prefix) => {
  let done = false;
  return children.map((child) => {
    if (done || typeof child.text !== "string") return child;
    done = true;
    return { ...child, text: child.text.replace(prefix, "") };
  });
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
          src={publicMediaUrl(block.image.url)}
          alt={block.image.alternativeText ?? ""}
          className="mt-6 first:mt-0 max-w-full h-auto"
          loading="lazy"
        />
      ) : null;
    case "paragraph":
    default:
      // Пустые абзацы редакторы ставят как отступ — ритм задают сами отступы абзацев
      if (isEmpty(children)) return null;
      // Абзацы, начатые редактором с «•»/«–» или с номера «1.», выводим как пункты списка
      const firstText = children.find((c) => typeof c.text === "string")?.text ?? "";
      if (BULLET_PREFIX.test(firstText)) {
        return (
          <p key={index} className="mt-2 first:mt-0 relative pl-5">
            <ListMarker />
            {renderInline(stripPrefix(children, BULLET_PREFIX))}
          </p>
        );
      }
      const number = firstText.match(NUMBER_PREFIX);
      if (number) {
        return (
          <p key={index} className="mt-2 first:mt-0 relative pl-8">
            <span className="absolute left-0 w-6 text-right font-semibold text-accent tabular-nums">
              {number[1]}.
            </span>
            {renderInline(stripPrefix(children, NUMBER_PREFIX))}
          </p>
        );
      }
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
