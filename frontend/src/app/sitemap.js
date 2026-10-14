import { API_URL, STRAPI_CACHE_TAG } from "./[locale]/needed/services";
import { LOCALES, SITE_URL } from "./[locale]/needed/seo";

const STATIC_PATHS = [
  "",
  "/about/general",
  "/about/management",
  "/about/structure",
  "/about/purchases",
  "/services/paid_services",
  "/services/technical_conditions",
  "/press_center",
  "/compliance",
  "/jobs",
];

// Все записи коллекции на одном языке (только нужные для sitemap поля)
async function fetchAllEntries(collection, locale, fields) {
  const entries = [];
  const query = fields.map((field, i) => `fields[${i}]=${field}`).join("&");
  for (let page = 1; ; page++) {
    const res = await fetch(
      `${API_URL}/api/${collection}?locale=${locale}&${query}` +
        `&pagination[page]=${page}&pagination[pageSize]=100`,
      { next: { revalidate: 3600, tags: [STRAPI_CACHE_TAG] } }
    );
    if (!res.ok) break;
    const json = await res.json();
    entries.push(...(json.data ?? []));
    if (page >= (json.meta?.pagination?.pageCount ?? 1)) break;
  }
  return entries;
}

export default async function sitemap() {
  const urls = [];

  for (const locale of LOCALES) {
    for (const path of STATIC_PATHS) {
      urls.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: path === "" || path === "/press_center" ? "daily" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }

    const [posts, directors] = await Promise.all([
      fetchAllEntries("blogs", locale, ["updatedAt"]),
      fetchAllEntries("director-lists", locale, ["updatedAt"]),
    ]);
    for (const post of posts) {
      urls.push({
        url: `${SITE_URL}/${locale}/press_center/${post.id}`,
        lastModified: post.attributes.updatedAt,
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
    for (const director of directors) {
      urls.push({
        url: `${SITE_URL}/${locale}/about/management/${director.id}`,
        lastModified: director.attributes.updatedAt,
        priority: 0.4,
      });
    }
  }

  return urls;
}
