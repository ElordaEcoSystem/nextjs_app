import { FileText, Download } from "lucide-react";
import { publicMediaUrl } from "@/app/[locale]/needed/services";

// Список документов из компонента Strapi ui.document: [{ title, item_document, year }].
// groupByYear: документы без года идут первыми одним списком (общие документы),
// ниже — блоки по годам, новые годы выше. Порядок внутри года — как в Strapi.
export const DocumentList = ({ documents, title, groupByYear = false }) => {
  const items = (documents ?? [])
    .map((doc) => {
      const file = doc?.item_document?.data?.attributes;
      const href = publicMediaUrl(file?.url);
      if (!href) return null;
      const ext = (file.ext || href.split(".").pop() || "").replace(".", "").toUpperCase();
      // Strapi хранит размер в килобайтах
      const size = !file.size ? null : file.size < 1024 ? `${Math.round(file.size)} КБ` : `${(file.size / 1024).toFixed(1)} МБ`;
      return { title: doc.title || file.name, href, ext, size, year: Number(doc.year) || null };
    })
    .filter(Boolean);

  if (items.length === 0) return null;

  const general = groupByYear ? items.filter((item) => !item.year) : items;
  const years = groupByYear
    ? [...new Set(items.filter((item) => item.year).map((item) => item.year))].sort((a, b) => b - a)
    : [];

  return (
    <section className="mt-10">
      {title && <h2 className="text-h3 font-bold text-prime mb-4">{title}</h2>}
      {general.length > 0 && <Files items={general} />}
      {years.map((year) => (
        <div key={year} className={general.length > 0 || year !== years[0] ? "mt-8" : ""}>
          <h3 className="flex items-center gap-4 text-h4 font-bold text-prime mb-3">
            {year}
            <span aria-hidden="true" className="h-px grow bg-secondary" />
          </h3>
          <Files items={items.filter((item) => item.year === year)} />
        </div>
      ))}
    </section>
  );
};

const Files = ({ items }) => (
  <ul className="grid gap-2">
    {items.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 border border-secondary bg-white px-4 py-3 hover:border-sky hover:shadow-sm transition-all"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-sky/10 text-accent">
            <FileText className="h-5 w-5" />
          </span>
          <span className="grow min-w-0">
            <span className="block text-sm sm:text-base leading-snug text-def_black group-hover:text-accent transition-colors">
              {item.title}
            </span>
            {(item.ext || item.size) && (
              <span className="block text-xs text-muted mt-1">
                {[item.ext, item.size].filter(Boolean).join(" · ")}
              </span>
            )}
          </span>
          <Download className="h-5 w-5 shrink-0 text-muted group-hover:text-accent transition-colors" />
        </a>
      </li>
    ))}
  </ul>
);
