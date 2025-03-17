import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { fetchAbout } from "../needed/services";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
export default async function About() {
  const locale = useLocale();
  const about = await fetchAbout(locale);

  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  return (
    <>
      <section className="bg-prime">
        <div className="container py-12 flex flex-col gap-4 ">
          <h2 className="text-3xl font-bold text-white">
            {about?.data[0].attributes.title}
          </h2>
          <div className="text-sm text-white flex flex-col gap-4">
            {about?.data[0].attributes.description.map((item) => {
              return <div>{item.children[0].text}</div>;
            })}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <h2 className="text-3xl font-bold ">
            {about?.data[0].attributes.sub_title}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 mt-4">
            {about?.data[0].attributes.director.map(
              ({
                id,
                position,
                full_name,
                reception_schedule,
                number,
                photo: {
                  data: {
                    attributes: { url },
                  },
                },
              }) => {
                const imageUrl = domain + url;

                return (
                  <div key={full_name}>
                    <DirectorCard
                      id={id}
                      key={full_name}
                      position={position}
                      imageUrl={imageUrl}
                      full_name={full_name}
                      reception_schedule={reception_schedule}
                      number={number}
                      className="w-full"
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const DirectorCard = ({
  id,
  position,
  full_name,
  reception_schedule,
  number,
  imageUrl,
}) => {
  const t = useTranslations();

  return (
    <div className="p-5 flex gap-4  flex-col border-2 border-gray-200 w-full h-full flex-1">
      <div className="relative w-full aspect-square flex-shrink-0 ">
        <Image
          src={imageUrl}
          alt="Фото сотрудника"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="pt-2 flex flex-col h-full">
        <div className="text-2xl text-prime font-bold">{full_name}</div>
        <div className="text-lg">{position}</div>
        <div className="text-base text-black mt-1 flex flex-col">
          {t("contact")} &nbsp;
          <div className="text-prime font-medium">{number}</div>
        </div>
        <div className="flex flex-col">
          {t("reception")}&nbsp;
          <div className="text-prime font-medium">{reception_schedule}</div>
        </div>
        <Link
          href={`about/${id}`}
          className="flex self-end items-center gap-2 bg-white py-2 px-4 shadow-md rounded hover:scale-[102%] transition-all text-prime text-sm font-bold leading-6 mt-auto w-fit"
        >
          <div className="hidden sm:block">{t("biography_button")}</div>
          <ArrowIcon className="h-4 stroke-[4px] w-auto stroke-prime inline-block items-end" />
        </Link>
      </div>
    </div>
  );
};
