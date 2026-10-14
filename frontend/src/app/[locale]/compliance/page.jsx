import { fetchAntikor } from "../needed/services";
import { DocumentList } from "@/components/DocumentList";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../needed/seo";
import { PageTitle } from "@/components/PageTitle";

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
    <section className="container py-10">
      <div className="max-w-3xl">
        <PageTitle>{entry?.title}</PageTitle>
        <RichText content={entry?.description_2} className="text-base leading-relaxed" />
        <DocumentList documents={entry?.document} title={t.title_doc_list} />
      </div>
    </section>
  );
}
