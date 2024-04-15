import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import { JOBS_ARR } from "../needed/constans";
import clsx from "clsx";

export default function JpbsPage() {
  return (
    <section className="mb-auto container py-12">
      <h2 className="text-3xl font-bold text-prime ">Вакансии</h2>
      <div className="mt-4">
        По актуальной информации о вакансиях обращаться: <br />
        Отдел кадров +7172 918 718 <br />
        Приемная +7172 918 453 <br />
        Почта elordaecosystem@mail.ru
      </div>
      <table className="mt-4 w-full h-screen">
        <th className="text-lg font-bold text-prime border-b-4 border-prime ">
          Наименование вакантной должности
        </th>
        {JOBS_ARR.map((item, i) => {
          return (
            <tr className={clsx(i % 2 == 0 ? "bg-slate-100 " : "")}>{item}</tr>
          );
        })}
      </table>
    </section>
  );
}
