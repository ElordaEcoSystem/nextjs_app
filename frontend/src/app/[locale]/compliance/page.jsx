import { getLocale } from "next-intl/server";
import { fetchAntikor } from "../needed/services";
import Link from "next/link";
import { RichText } from "@/components/RichText";

export default async function Compliance() {
  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  const locale = await getLocale();
  const data = await fetchAntikor(locale);
  const entry = data?.data?.[0]?.attributes;
  console.log("DATAFROMCOMPLINCE",entry.description_2)
  return (
    <section className="mb-auto container py-8">
      <h2 className="text-3xl font-bold text-def_black">
        {entry?.title}
      </h2>
      <div className="mt-4">
        <RichText content={entry?.description_2}  />
      </div>

      <div className="mt-4">
        {entry?.document?.map((item) => (
          <Link
            key={item?.title}
            className="hover:text-prime hover:bg-secondary transition-all table mt-2"
            href={domain + item?.item_document?.data?.attributes?.url}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
