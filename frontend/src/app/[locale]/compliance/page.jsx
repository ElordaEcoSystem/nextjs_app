import { fetchAntikor, mediaUrl } from "../needed/services";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../needed/seo";

export const generateMetadata = staticPageMetadata("/compliance", "header.compliance");

export default async function Compliance({ params: { locale } }) {
  const data = await fetchAntikor(locale);
  const entry = data?.data?.[0]?.attributes;

  const translations = {
    kk: {
      title_doc_list: "Құжаттар"
    },
    ru:{
      title_doc_list: "Документы"
    }
  }
  const t = translations[locale] || translations.kk;

  return (
    <section className="mb-auto container py-8">
      <h2 className="text-3xl font-bold text-def_black">
        {entry?.title}
      </h2>
      <div className="mt-4">
        <RichText content={entry?.description_2}  />
      </div>
      <div className="text-xl font-medium mt-2">{t.title_doc_list}</div>
      <div className="mt-4">
        {entry?.document?.map((item, index) => {
          const href = mediaUrl(item?.item_document?.data?.attributes?.url);
          if (!href) return null;
          return (
            <Link
              key={index}
              className="underline hover:text-prime hover:bg-secondary transition-all table mt-2"
              href={href}
            >
              {item?.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
