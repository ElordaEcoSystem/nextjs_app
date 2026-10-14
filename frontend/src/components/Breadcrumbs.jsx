import Link from "next/link";
import { ChevronRight } from "lucide-react";

// items: [{ label, href }]; последний пункт — текущая страница (без ссылки)
export const Breadcrumbs = ({ items }) => (
  <nav aria-label="breadcrumb" className="text-sm text-muted">
    <ol className="flex flex-wrap items-center gap-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-1 min-w-0">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="truncate max-w-[16rem] text-def_black/70">
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
