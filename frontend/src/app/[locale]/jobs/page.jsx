import React from "react";
import { fetchJobs } from "../needed/services";
import { blockText } from "../needed/format";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../needed/seo";
import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/jobs", "header.jobs");

export default async function JobsPage({ params: { locale } }) {
  const data = await fetchJobs(locale);
  const entry = data?.data?.[0]?.attributes;
  const jobOpenings = (entry?.job_openings ?? []).map(blockText).filter(Boolean);

  return (
    <section className="container py-10">
      <div className="max-w-3xl">
        <PageTitle>{entry?.title}</PageTitle>
        <RichText content={entry?.info} className="text-base leading-relaxed" />

        {jobOpenings.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-prime mb-4">{entry.sub_title}</h2>
            <ul className="grid gap-2">
              {jobOpenings.map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border border-secondary bg-white px-4 py-3"
                >
                  <span className="h-2 w-2 shrink-0 bg-leaf" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
