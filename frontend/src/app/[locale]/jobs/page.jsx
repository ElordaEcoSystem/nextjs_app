import React from "react";
import clsx from "clsx";
import { fetchJobs } from "../needed/services";
import { useLocale } from "next-intl";

export default async function JobsPage() {
  const locale = useLocale();
  const data = await fetchJobs(locale);
  console.log("JOBSPAGE", data.data[0].attributes.job_openings[0].children[0].text)
  const shouldRenderTable = !(
    data.data[0].attributes.job_openings.length === 1 &&
    data.data[0].attributes.job_openings[0].children[0].text === ''
  );
 
  return (
    <section className="mb-auto container py-8">
      <h2 className="text-3xl font-bold text-def_black">
        {data.data[0].attributes.title}
      </h2>
      <div className="mt-4">
        {data.data[0].attributes.info.map((item) => (
          <div key={item.children[0].text}>{item.children[0].text}</div>
        ))}
      </div>

      {shouldRenderTable && (
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="text-lg font-bold text-prime border-b-4 border-prime">
                {data.data[0].attributes.sub_title}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data[0].attributes.job_openings.map((item, i) => (
              <tr
                className={clsx(i % 2 === 0 ? 'bg-slate-100' : '')}
                key={item.children[0].text}
              >
                <td>{item.children[0].text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
