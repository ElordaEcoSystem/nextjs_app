import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { fetchBlog } from "../needed/services";
import { parseId } from "../needed/format";
import { pageMetadata } from "../needed/seo";
import { PageTitle } from "@/components/PageTitle";
import { NewsCard } from "@/components/NewsCard";

const PAGE_SIZE = 12;

export async function generateMetadata({ params: { locale }, searchParams }) {
  const t = await getTranslations({ locale, namespace: "press_center" });
  const page = parseId(searchParams?.page) || 1;
  const metadata = pageMetadata(locale, "/press_center", t("title"));
  if (page > 1) {
    metadata.title = `${t("title")} — ${t("page")} ${page}`;
    metadata.alternates = { canonical: `/${locale}/press_center?page=${page}` };
  }
  return metadata;
}

export default async function PressCenter({ params: { locale }, searchParams }) {
  const page = parseId(searchParams?.page) || 1;
  const blog = await fetchBlog(locale, { page, pageSize: PAGE_SIZE });
  const t = await getTranslations("press_center");
  const posts = blog?.data ?? [];
  const pageCount = blog?.meta?.pagination?.pageCount ?? 1;

  return (
    <section className="container py-10 flex flex-col gap-8">
      <PageTitle>{t("title")}</PageTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} locale={locale} />
        ))}
      </div>

      <Pagination
        page={page}
        pageCount={pageCount}
        basePath={`/${locale}/press_center`}
        labels={{ prev: t("prev"), next: t("next"), page: t("page") }}
      />
    </section>
  );
}

// Номера страниц: первая, последняя и соседние с текущей, остальное — "…"
function getPageItems(page, pageCount) {
  const pages = new Set([1, pageCount]);
  for (let p = page - 2; p <= page + 2; p++) {
    if (p > 1 && p < pageCount) pages.add(p);
  }
  const sorted = [...pages].sort((a, b) => a - b);
  const items = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) items.push("…" + p);
    items.push(p);
  });
  return items;
}

const Pagination = ({ page, pageCount, basePath, labels }) => {
  if (pageCount <= 1) return null;
  const hrefFor = (p) => (p === 1 ? basePath : `${basePath}?page=${p}`);
  const linkClass =
    "min-w-[2.5rem] h-10 px-3 flex items-center justify-center rounded border border-secondary bg-white text-sm font-medium text-prime hover:border-prime transition-colors";

  return (
    <nav className="flex flex-wrap gap-2 justify-center" aria-label={labels.page}>
      {page > 1 && (
        <Link href={hrefFor(page - 1)} className={linkClass} rel="prev">
          {labels.prev}
        </Link>
      )}
      {getPageItems(page, pageCount).map((item) =>
        typeof item === "string" ? (
          <span key={item} className="min-w-[2.25rem] h-9 flex items-center justify-center text-sm">
            …
          </span>
        ) : item === page ? (
          <span
            key={item}
            aria-current="page"
            className={`${linkClass} !bg-prime !border-prime text-white`}
          >
            {item}
          </span>
        ) : (
          <Link key={item} href={hrefFor(item)} className={linkClass}>
            {item}
          </Link>
        )
      )}
      {page < pageCount && (
        <Link href={hrefFor(page + 1)} className={linkClass} rel="next">
          {labels.next}
        </Link>
      )}
    </nav>
  );
};
