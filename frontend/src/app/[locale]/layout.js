import { Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import "./globals.css";
import { Footer } from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import { LOCALES, SITE_URL, pageMetadata } from "./needed/seo";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const description = t("description");
  // canonical и hreflang здесь не задаются: их наследовали бы все страницы
  const { openGraph } = pageMetadata(locale, "");

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: "Elorda Eco System", template: "%s | Elorda Eco System" },
    description,
    keywords:
      "Elorda Eco System, Астана, ливневая канализация, водоотведение, нөсер кәрізі",
    openGraph: { ...openGraph, title: "Elorda Eco System", description },
    verification: {
      google: "hPJ75BCKHf98HY5tY4CfEQHXD6ZQu0MLIMOpjJe4EJc",
      yandex: "1c812703e7ec8525",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function LocaleLayout({ children, params: { locale } }) {
  if (!LOCALES.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${roboto.className} flex flex-col min-h-screen text-def_black`}>
        <HeaderWrapper locale={locale} />
        <main className="grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
