"use client";
import React, { useState } from "react";
import Image from "next/image";
import { mediaUrl } from "@/app/[locale]/needed/services";

// Годы, за которые в Strapi есть хотя бы одно значение, от новых к старым
function collectYears(items) {
  const years = new Set();
  items.forEach((item) =>
    item.attributes.number?.forEach(({ year }) => year && years.add(Number(year)))
  );
  return [...years].sort((a, b) => b - a);
}

export const Perform = ({ perform_data, title }) => {
  const items = perform_data?.data ?? [];
  const years = collectYears(items);
  const [activeYear, setActiveYear] = useState(years[0]);

  if (items.length === 0) return null;

  return (
    <section id="perform" className="py-20 bg-zinc-100 ">
      <div className="container ">
        <div className="text-def_black text-3xl font-bold">{title}</div>
        <div className="mt-10 flex gap-3 overflow-auto scroll-container">
          {years.map((year) => (
            <button
              key={year}
              aria-pressed={activeYear === year}
              className={`py-1 md:px-7 px-4 rounded-sm text-base ${
                activeYear === year
                  ? " bg-prime text-white"
                  : " bg-white border border-secondary text-base-color hover:scale-105 transition-all"
              }`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="  mt-6 grid md:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-1  justify-items-center">
          {items.map((item) => (
            <PerformItem
              key={item.id}
              title={item.attributes.title}
              numberAndYear={item.attributes.number ?? []}
              unit={item.attributes.unit}
              icon={mediaUrl(item.attributes.icon?.data?.attributes?.url)}
              activeYear={activeYear}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PerformItem = ({ title, icon, numberAndYear, unit, activeYear }) => {
  const performNumber = numberAndYear.find((item) => Number(item.year) === activeYear);
  return (
    <div className="py-10  px-3 border border-secondary hover:border-prime bg-white transition-all  hover:shadow-main shadow-prime w-full ">
      <div className="flex items-center justify-center h-12">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={48}
            height={48}
            sizes="48px"
            className="w-12 object-cover justify-center"
          />
        )}
      </div>
      <div className="mt-3 text-prime text-center text-xl font-semibold transition-all ">
        {(performNumber?.number ?? 0).toLocaleString("ru-RU")}
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
