import React from "react";
import { JOBS_ARR } from "../needed/constans";
import clsx from "clsx";
import { fetchJobs } from "../needed/services";
import { useLocale } from "next-intl";

export default async function JobsPage() {
  const locale = useLocale();
  const data = await fetchJobs(locale);
  console.log("JOBSPAGE", data.data[0].attributes.job_openings);
  return (
    <section className="mb-auto container py-12">
      <h2 className="text-3xl font-bold text-prime ">
        {data.data[0].attributes.title}
      </h2>
      <div className="mt-4">
        {data.data[0].attributes.info.map((item) => {
          return <div key={item.children[0].text}>{item.children[0].text}</div>;
        })}
        {/* По актуальной информации о вакансиях обращаться: <br />
        Отдел кадров +7172 918 718 <br />
        Приемная +7172 918 453 <br />
        Почта elordaecosystem@mail.ru */}
      </div>
      <table className="mt-4 w-full ">
        <th className="text-lg font-bold text-prime border-b-4 border-prime ">
          {data.data[0].attributes.sub_title}
        </th>
        {data.data[0].attributes.job_openings.map((item, i) => {
          return (
            <tr
              className={clsx(i % 2 == 0 ? "bg-slate-100 " : "")}
              key={item.children[0].text}
            >
              {item.children[0].text}
            </tr>
          );
        })}
      </table>
    </section>
  );
}
