import { FileText, Download } from "lucide-react";
import { publicMediaUrl } from "@/app/[locale]/needed/services";

// Список документов из компонента Strapi ui.document: [{ title, item_document }]
export const DocumentList = ({ documents, title }) => {
  const items = (documents ?? [])
    .map((doc) => {
      const file = doc?.item_document?.data?.attributes;
      const href = publicMediaUrl(file?.url);
      if (!href) return null;
      const ext = (file.ext || href.split(".").pop() || "").replace(".", "").toUpperCase();
      // Strapi хранит размер в килобайтах
      const size = !file.size ? null : file.size < 1024 ? `${Math.round(file.size)} КБ` : `${(file.size / 1024).toFixed(1)} МБ`;
      return { title: doc.title || file.name, href, ext, size };
    })
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <section className="mt-10">
      {title && <h2 className="text-h3 font-bold text-prime mb-4">{title}</h2>}
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
    </section>
  );
};
