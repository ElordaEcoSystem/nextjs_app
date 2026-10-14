import { fetchPTO } from "../../needed/services";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../../needed/seo";

export const generateMetadata = staticPageMetadata("/services/technical_conditions", "header.services.technical_conditions");

export default async function RequestPTO({ params: { locale } }) {
  const data = await fetchPTO(locale);
  const entry = data?.data?.[0]?.attributes;

  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold text-def_black">{entry?.title}</h2>
      <RichText content={entry?.text} className="mt-4 flex flex-col gap-1" />
    </div>
  );
}
