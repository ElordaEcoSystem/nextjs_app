import { getTranslations } from "next-intl/server";

export const LOCALES = ["kk", "ru"];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://elordaecosystem.kz";

const OG_LOCALES = { kk: "kk_KZ", ru: "ru_RU" };

// title, canonical и hreflang для страницы, адрес которой одинаков на обоих языках.
// path — путь без префикса языка, например "/about/general" ("" для главной).
export function pageMetadata(locale, path, title) {
  const languages = Object.fromEntries(
    LOCALES.map((lang) => [lang, `/${lang}${path}`])
  );
  return {
    ...(title && { title }),
    alternates: { canonical: `/${locale}${path}`, languages },
    openGraph: {
      ...(title && { title }),
      url: `/${locale}${path}`,
      siteName: "Elorda Eco System",
      locale: OG_LOCALES[locale],
      type: "website",
    },
  };
}

// generateMetadata для обычной страницы: заголовок берётся из messages/*.json
export function staticPageMetadata(path, titleKey) {
  return async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale });
    return pageMetadata(locale, path, titleKey ? t(titleKey) : undefined);
  };
}
