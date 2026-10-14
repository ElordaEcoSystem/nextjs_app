import { fetchProcurement } from "../../needed/services";
import { DocumentList } from "@/components/DocumentList";
import { staticPageMetadata } from "../../needed/seo";
import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/about/purchases", "header.about.purchases");

export default async function Procurement({ params: { locale } }) {
  const data = await fetchProcurement(locale);
  const entry = data?.data?.[0]?.attributes;

  return (
    <section className="container py-10">
      <div className="max-w-3xl">
        <PageTitle>{entry?.title}</PageTitle>
        <DocumentList documents={entry?.document_2} />
      </div>
    </section>
  );
}
