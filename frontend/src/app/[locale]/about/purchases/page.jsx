import Link from "next/link";
import React from "react";
import { fetchProcurement, mediaUrl } from "../../needed/services";
import { staticPageMetadata } from "../../needed/seo";

export const generateMetadata = staticPageMetadata("/about/purchases", "header.about.purchases");

export default async function Procurement({ params: { locale } }) {
  const data = await fetchProcurement(locale);
  const entry = data?.data?.[0]?.attributes;

  return (
    <section className="mb-auto container py-8">
      <h2 className="text-3xl font-bold text-def_black ">{entry?.title}</h2>
      <div className="mt-4">
        {entry?.document_2?.map((item, index) => {
          const href = mediaUrl(item?.item_document?.data?.attributes?.url);
          if (!href) return null;
          return (
            <Link
              key={index}
              className="hover:text-prime hover:bg-secondary transition-all table"
              href={href}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
