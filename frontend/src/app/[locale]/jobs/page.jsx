import React from "react";
import clsx from "clsx";
import { fetchJobs } from "../needed/services";
import { blockText } from "../needed/format";
import { RichText } from "@/components/RichText";
import { staticPageMetadata } from "../needed/seo";

export const generateMetadata = staticPageMetadata("/jobs", "header.jobs");

export default async function JobsPage({ params: { locale } }) {
  const data = await fetchJobs(locale);
  const entry = data?.data?.[0]?.attributes;
  const jobOpenings = (entry?.job_openings ?? []).map(blockText).filter(Boolean);

  return (
    <section className="mb-auto container py-8">
      <h2 className="text-3xl font-bold text-def_black">{entry?.title}</h2>
      <RichText content={entry?.info} className="mt-4" />

      {jobOpenings.length > 0 && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="text-lg font-bold text-prime border-b-4 border-prime">
                {entry.sub_title}
              </th>
            </tr>
          </thead>
          <tbody>
            {jobOpenings.map((text, i) => (
              <tr className={clsx(i % 2 === 0 ? "bg-slate-100" : "")} key={i}>
                <td>{text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
