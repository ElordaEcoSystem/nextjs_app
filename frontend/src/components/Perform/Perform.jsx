"use client";
import React, { useState } from "react";
import { PerformTitle } from "./Perform-title";
import { PerformYears } from "./Perform-years";
import { PerformItems } from "./Perform-items";
export const Perform = () => {
  const [activeYear, setActiveYear] = useState(2023);
  return (
    <section id="perform" className="py-10">
      <div className="container ">
        <PerformTitle />
        <div className="mt-14 flex gap-6">
          <PerformYears setActiveYear={setActiveYear} activeYear={activeYear} />
        </div>
        <div className="flex justify-between mt-6">
          <PerformItems />
        </div>
      </div>
    </section>
  );
};
//
