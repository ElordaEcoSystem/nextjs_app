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
    <section id="perform" className="py-12 lg:py-14 bg-secondary/50">
      <div className="container">
        <h2 className="text-prime text-3xl font-bold">{title}</h2>
        {/* Ряд годов прокручивается; градиент справа подсказывает, что есть ещё */}
        <div className="relative mt-6">
          <div className="flex gap-2 overflow-auto scroll-container pr-8">
            {years.map((year) => (
              <button
                key={year}
                aria-pressed={activeYear === year}
                className={`shrink-0 py-2 px-5 md:px-7 text-base font-medium transition-colors ${
                  activeYear === year
                    ? "bg-prime text-white"
                    : "bg-white border border-secondary text-prime hover:border-prime"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#f2f4f6] md:hidden" />
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
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
    <div className="flex flex-col items-center text-center py-6 md:py-8 px-3 bg-white border border-secondary hover:border-sky hover:shadow-md transition-all">
      <div className="flex items-center justify-center h-12">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={48}
            height={48}
            sizes="48px"
            className="w-10 md:w-12 object-contain"
          />
        )}
      </div>
      <div className="mt-3 text-prime text-2xl md:text-3xl font-bold tabular-nums">
        {(performNumber?.number ?? 0).toLocaleString("ru-RU")}
        <span className="ml-1 text-base font-semibold text-muted">{unit}</span>
      </div>
      <div className="mt-2 text-def_black/80 text-sm leading-snug">{title}</div>
    </div>
  );
};
