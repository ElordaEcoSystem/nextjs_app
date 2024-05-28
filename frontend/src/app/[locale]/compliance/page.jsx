import { useLocale } from "next-intl";
import { fetchAntikor } from "../needed/services";
import Link from "next/link";

export default async function Compliance() {
  const domain = "http://127.0.0.1:1337";
  const locale = useLocale();
  const data = await fetchAntikor(locale);
  console.log("ANTIKOR", data.data[0].attributes.title);
  return (
    <section className="mb-auto container py-12">
      <h2 className="text-3xl font-bold text-prime ">
        {data.data[0].attributes.title}
      </h2>
      <div className="mt-4">
        {data.data[0].attributes.document.map((item) => {
          return (
            <Link
              className="hover:text-prime hover:bg-secondary transition-all table"
              href={domain + item.item_document.data.attributes.url}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
