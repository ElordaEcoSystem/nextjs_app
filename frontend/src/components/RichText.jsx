const renderChildren = (children) =>
  children.map((child, i) => {
    if (!child.text && child.text !== 0) return null;
    if (child.bold) return <strong key={i}>{child.text}</strong>;
    if (child.italic) return <em key={i}>{child.text}</em>;
    if (child.underline) return <u key={i}>{child.text}</u>;
    return child.text;
  });

const renderBlock = (block, index) => {
  const children = block.children ?? [];
  const isEmpty = children.every((c) => !c.text);

  switch (block.type) {
    case "heading":
      const Tag = `h${block.level ?? 2}`;
      return (
        <Tag key={index} className="font-bold text-xl mt-4 mb-2">
          {renderChildren(children)}
        </Tag>
      );
    case "list":
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={index} className={`mt-2 pl-5 ${block.format === "ordered" ? "list-decimal" : "list-disc"}`}>
          {block.children.map((item, i) => (
            <li key={i}>{renderChildren(item.children ?? [])}</li>
          ))}
        </ListTag>
      );
    case "paragraph":
    default:
      if (isEmpty) return <div key={index} className="h-4" />;
      return (
        <p key={index} className="mt-1">
          {renderChildren(children)}
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
