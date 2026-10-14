const DATE_LOCALES = { kk: "kk-KZ", ru: "ru-RU" };

// "2024-01-17" -> "17 января 2024 г." / "17 қаңтар 2024 ж."
export function formatDate(value, locale) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(DATE_LOCALES[locale] || "ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

// Плоский текст из поля Strapi типа "blocks" (для анонсов и description)
export function blocksToPlainText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const collect = (nodes) =>
    nodes
      .map((node) => (node.children ? collect(node.children) : node.text ?? ""))
      .join("");
  return blocks
    .map((block) => collect(block.children ?? []))
    .filter(Boolean)
    .join(" ");
}

// id из адреса должен быть положительным целым числом
export function parseId(value) {
  return /^\d+$/.test(String(value)) ? Number(value) : null;
}

// Текст одного блока (абзаца) поля "blocks" со всеми его фрагментами
export function blockText(block) {
  return blocksToPlainText([block]);
}
