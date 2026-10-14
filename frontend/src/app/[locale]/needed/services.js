export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://strapi.elordaecosystem.kz";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// Функция для выполнения запросов. Возвращает null при любой ошибке (в т.ч. 404),
// поэтому страницы должны сами решать, что показывать при отсутствии данных.
async function fetchData(endpoint) {
  try {
    const res = await fetch(`${API_URL}/api/${endpoint}`, {
      headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
      cache: "no-store",
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error(`Ошибка при получении ${endpoint}:`, err);
    return null;
  }
}

// Полный URL медиафайла из Strapi (или null, если файла нет)
export function mediaUrl(path) {
  if (!path) return null;
  return path.startsWith("http") ? path : API_URL + path;
}

// В Strapi v4 каждая языковая версия записи имеет свой id, а версии связаны
// через поле localizations. Возвращает id версии на нужном языке или null.
export function findLocalizationId(entry, locale) {
  const attributes = entry?.attributes;
  if (!attributes) return null;
  if (attributes.locale === locale) return entry.id;
  const localization = attributes.localizations?.data?.find(
    (item) => item.attributes?.locale === locale
  );
  return localization?.id ?? null;
}

// Функции для получения данных с API

export async function fetchNav(locale) {
  return fetchData(`navs?locale=${locale}&populate=*`);
}

export async function fetchPerformBlocks(locale) {
  return fetchData(
    `perform-items?populate=number&populate=icon&locale=${locale}`
  );
}

export async function fetchMainPage(locale) {
  return fetchData(
    `main-pages?populate=button&populate=news_button&locale=${locale}`
  );
}

export async function fetchFooter(locale) {
  return fetchData(`footers?locale=${locale}&populate=*`);
}

export async function fetchAbout(locale) {
  return fetchData(
    `abouts?populate=director&populate=director.photo&locale=${locale}`
  );
}

export async function fetchDirectors(locale) {
  return fetchData(`director-lists?populate=photo&locale=${locale}`);
}

// Strapi ищет запись по id без учёта языка, поэтому locale здесь не передаётся:
// страница сама сверяет язык записи и при необходимости переходит на перевод.
export async function fetchDirectorById(id) {
  return fetchData(
    `director-lists/${id}?populate[photo]=true&populate[localizations][fields][0]=locale`
  );
}

export async function fetchAntikor(locale) {
  return fetchData(
    `antikors?populate=document&populate=document.item_document&locale=${locale}`
  );
}

export async function fetchJobs(locale) {
  return fetchData(`jobs?locale=${locale}&populate=*`);
}

export async function fetchBlog(locale, { page = 1, pageSize = 12 } = {}) {
  return fetchData(
    `blogs?sort[0]=date_of_publication:desc&sort[1]=id:desc&locale=${locale}` +
      `&populate[thumbnail]=true` +
      `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
}

export async function fetchBlogById(id) {
  return fetchData(
    `blogs/${id}?populate[thumbnail]=true&populate[photo_content]=true` +
      `&populate[video_content]=true&populate[youtube_link]=true` +
      `&populate[localizations][fields][0]=locale`
  );
}

export async function fetchProcurement(locale) {
  return fetchData(
    `procurements?populate=document_2&populate=document_2.item_document&locale=${locale}`
  );
}

export async function fetchPTO(locale) {
  return fetchData(`ptos?locale=${locale}&populate=*`);
}

export async function fetchPaidTable(locale) {
  return fetchData(
    `paid-services?populate=document&populate=document.item_document&locale=${locale}`
  );
}
