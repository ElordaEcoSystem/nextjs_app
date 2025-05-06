"use client";
import React, { useState } from "react";
import { PerformYears } from "./Perform-years";
// import { PerformItems } from "./Perform-items";
import Image from "next/image";

export const Perform = ({ perform_data, title }) => {
  const [activeYear, setActiveYear] = useState(2025);
  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  // perform_title
  // console.log(perform_data.data[0].attributes.icon.data.attributes.url);
  return (
    <section id="perform" className="py-20 bg-zinc-100 ">
      <div className="container ">
        <div className="text-def_black text-3xl font-bold">{title}</div>
        <div className="mt-10 flex gap-3 overflow-auto scroll-container">
          <PerformYears setActiveYear={setActiveYear} activeYear={activeYear} />
        </div>
        <div className="  mt-6 grid md:grid-cols-5 gap-2 sm:grid-cols-2 grid-cols-1  justify-items-center">
          {perform_data?.data?.map((item) => {
            const imageUrl = domain + item.attributes.icon.data.attributes.url;
            return (
              <PerfromItem
                key={item.id}
                title={item.attributes.title}
                numberAndYear={item.attributes.number}
                unit={item.attributes.unit}
                icon={imageUrl}
                activeYear={activeYear}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
//

const PerfromItem = ({ title, icon, numberAndYear, unit, activeYear }) => {
  const perform_number = numberAndYear.find((item) => item.year == activeYear);
  // console.log("PERFORM_NUMBER", activeYear);
  // console.log("PERFORM_NUMBER", perform_number.number);
  return (
    <div className="py-10  px-3 border border-secondary hover:border-prime bg-white transition-all  hover:shadow-main shadow-prime w-full ">
       {/* md:w-[170px]  */}
      <div className="flex items-center justify-center">

        <Image
          src={icon}
          alt={icon}
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 object-cover justify-center"
        ></Image>
      </div>
      <div className="mt-3 text-prime text-center text-xl font-semibold transition-all ">
        {perform_number?.number.toLocaleString('ru-RU') || 0}
      </div>
      <div className="text-prime text-center text-base font-semibold">
        {unit}
      </div>
      <div className="mt-3 text-def_black text-center text-sm font-normal leading-tight">
        {title}
      </div>
    </div>
  );
};
