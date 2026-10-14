import { fetchPTO } from "../../needed/services";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../../needed/seo";
import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/services/technical_conditions", "header.services.technical_conditions");

export default async function RequestPTO({ params: { locale } }) {
  const data = await fetchPTO(locale);
  const entry = data?.data?.[0]?.attributes;

  return (
    <div className="container py-10">
      <PageTitle>{entry?.title}</PageTitle>
      <RichText content={entry?.text} className="max-w-3xl text-body text-def_black/85" />
    </div>
  );
}
