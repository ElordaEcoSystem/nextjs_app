import React from "react";
import { fetchAbout } from "../../needed/services";
import { blockText } from "../../needed/format";
import { staticPageMetadata } from "../../needed/seo";

export const generateMetadata = staticPageMetadata("/about/general", "header.about.general");

export default async function About({ params: { locale } }) {
  const about = await fetchAbout(locale);
  const entry = about?.data?.[0]?.attributes;

  return (
    <section>
      <div className="container py-8 flex flex-col gap-4 ">
        <h2 className="text-3xl font-bold text-def_black">{entry?.title}</h2>
        <div className="text-sm text-def_black flex flex-col gap-4">
          {entry?.description?.map((item, index) => (
            <div key={index}>{blockText(item)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
