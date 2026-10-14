import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { fetchBlog, mediaUrl } from "../needed/services";
import { blocksToPlainText, formatDate, parseId } from "../needed/format";
import { pageMetadata } from "../needed/seo";

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
    <section className="container py-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-def_black">{t("title")}</h1>
      <div className="grid gap-5 sm:flex sm:flex-col grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {posts.map((post) => {
          const href = `/${locale}/press_center/${post.id}`;
          const thumbnail = post.attributes.thumbnail?.data?.attributes;
          const imageUrl = mediaUrl(
            thumbnail?.formats?.small?.url ?? thumbnail?.url
          );

          return (
            <article
              className="grid sm:grid-cols-[208px_,auto] grid-flow-row"
              key={post.id}
            >
              <Link href={href} tabIndex={-1} aria-hidden="true">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    width={208}
                    height={208}
                    sizes="(min-width: 600px) 208px, 240px"
                    alt=""
                    className="sm:h-52 sm:w-52 h-60 w-60 object-cover sm:mx-0 mx-auto"
                  />
                ) : (
                  <div className="sm:h-52 sm:w-52 h-60 w-60 bg-secondary sm:mx-0 mx-auto" />
                )}
              </Link>
              <div className="sm:px-3 py-3 px-0 sm:w-auto sm:m-0 w-60 mx-auto">
                <Link
                  href={href}
                  className="text-lg font-bold text-prime break-words line-clamp-2"
                >
                  {post.attributes.title}
                </Link>
                <p className="text-sm mt-2 line-clamp-4 break-words">
                  {blocksToPlainText(post.attributes.description_rich_text)}
                </p>
                <time
                  dateTime={post.attributes.date_of_publication}
                  className="block text-gray-400 text-sm mt-2"
                >
                  {formatDate(post.attributes.date_of_publication, locale)}
                </time>
              </div>
            </article>
          );
        })}
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
    "min-w-[2.25rem] h-9 px-3 flex items-center justify-center border border-secondary text-sm text-prime hover:bg-secondary transition-all";

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
            className={`${linkClass} bg-prime text-white hover:bg-prime`}
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
