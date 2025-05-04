import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default async function About() {

  return (
    <>
   <div className="container py-8 flex flex-col gap-4 ">
   <Strucure className=""/>

   </div>
    </>
  );
}


const Strucure = ({className}) => {
  const t = useTranslations();
  return (
    <div className={className}>
        <h2 className="text-3xl font-bold ">
            {t("structure_title")}
        </h2>
        <div className="mt-4">

        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="structure"
          src="/structure.jpg"
          className=" w-full object-cover"
          />
        </div>
    </div>
  )
}