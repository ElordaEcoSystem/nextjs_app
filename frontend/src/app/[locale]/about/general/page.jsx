import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { fetchAbout, fetchDirectors } from "../../needed/services";
export default async function About() {
  const locale = useLocale();
  const about = await fetchAbout(locale);
  const directors = await fetchDirectors(locale);
  console.log("DIRECTORS@", directors.data);

  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  console.log("FROMMAIN", about.data);
  return (
    <>
      <section className="">
        <div className="container py-8 flex flex-col gap-4 ">
          <h2 className="text-3xl font-bold text-def_black">
            {about?.data[0].attributes.title}
          </h2>
          <div className="text-sm text-def_black flex flex-col gap-4">
            {about?.data[0].attributes.description.map((item) => {
              return <div>{item.children[0].text}</div>;
            })}
          </div>
        </div>
      </section>
      
    </>
  );
}
