import React from "react";
import { fetchAbout } from "../../needed/services";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../../needed/seo";
import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/about/general", "header.about.general");

export default async function About({ params: { locale } }) {
  const about = await fetchAbout(locale);
  const entry = about?.data?.[0]?.attributes;

  return (
    <section>
      <div className="container py-10">
        <PageTitle>{entry?.title}</PageTitle>
        <RichText
          content={entry?.description}
          className="max-w-3xl text-body text-def_black/85"
        />
      </div>
    </section>
  );
}
