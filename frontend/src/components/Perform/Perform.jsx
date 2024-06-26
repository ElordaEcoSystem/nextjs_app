"use client";
import React, { useState } from "react";
import { PerformTitle } from "./Perform-title";
import { PerformYears } from "./Perform-years";
import { PerformItems } from "./Perform-items";
import Image from "next/image";

export const Perform = ({ perform_data }) => {
  const [activeYear, setActiveYear] = useState(2023);
  const domain = "http://127.0.0.1:1337";
  // console.log(perform_data.data[0].attributes.icon.data.attributes.url);
  return (
    <section id="perform" className="py-10">
      <div className="container ">
        <PerformTitle />
        <div className="mt-14 flex gap-3">
          <PerformYears setActiveYear={setActiveYear} activeYear={activeYear} />
        </div>
        <div className="  mt-6 grid sm:grid-cols-5 gap-2 grid-cols-2  justify-items-center">
          {/* sm:max-md:px-2 py-2 flex md:justify-between mt-6 gap-2 flex-row md:overflow-visible overflow-x-auto  */}
          {/* no-scrollbar */}
          {perform_data?.data?.map((item) => {
            // console.log(item);
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
    <div className="py-6  px-3 border-2 border-prime bg-white transition-all hover:scale-105 hover:shadow-main shadow-prime sm:w-[170px]  w-full">
      <div className="flex items-center justify-center">
        {/* <PerformIcon key={icon} icon={icon} className="w-12" /> */}
        <Image
          src={icon}
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 object-cover justify-center"
        ></Image>
      </div>
      <div className="mt-3 text-prime text-center text-xl font-semibold transition-all ">
        {perform_number.number}
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
