import React from "react";

import { ArrowIcon } from "./icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import { fetchBlog } from "@/app/[locale]/needed/services";
import { useLocale } from "next-intl";

export const News = async ({ data }) => {
  const locale = useLocale();

  const news_data = await fetchBlog(locale);
  const domain = "http://127.0.0.1:1337";
  console.log("NEW_DATA", news_data.data);
  // const locale = useLocale();
  // const main_page = await fetchMainPage(locale);

  return (
    <section id="news" className="py-10 container ">
      <div className="flex justify-between items-center">
        <h3 className="text-def_black text-4xl font-bold">
          {data.data[0].attributes.news_title}
        </h3>
        <Link
          href={`/${locale}/${data.data[0].attributes.news_button[0].link}`}
          className="flex items-center gap-2 bg-white py-2 px-4 shadow-md rounded  hover:scale-[102%] transition-all text-prime text-sm font-bold leading-6 active:scale-95"
        >
          {data.data[0].attributes.news_button[0].title}
          <ArrowIcon className="h-4 stroke-[4px] w-auto stroke-prime" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-14 cursor-pointer">
        <Link
          href={`/${locale}/press_center/${news_data.data[0].id}`}
          className="h-[556px] flex flex-col  transition-all   active:scale-[98%] "
        >
          <div className="h-full bg-slate-400 ">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={
                domain +
                news_data.data[0].attributes.thumbnail?.data.attributes.url
              }
              className="h-[448px] w-full object-cover"
            />
          </div>

          <div className="bottom-0 w-full bg-base-color px-5 py-[30px] bg-prime">
            <div className="text-white text-xl font-bold line-clamp-1 break-all">
              {news_data.data[0].attributes.title}
            </div>
            <div className="text-slate-400 text-xs font-normal mt-1 ">
              {news_data.data[0].attributes.date_of_publication}
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-between gap-[5px] ">
          {news_data.data.slice(1, 4).map((item) => {
            return (
              <LittleNews
                key={item.id}
                title={item.attributes.title}
                date={item.attributes.date_of_publication}
                id={item.id}
                thumbnail={
                  domain + item.attributes.thumbnail?.data.attributes.url
                }
                locale={locale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const LittleNews = ({ thumbnail, title, date, id, locale }) => {
  return (
    <Link
      href={`/${locale}/press_center/${id}`}
      className="w-full grid grid-cols-[182px_auto] h-full   transition-all  active:scale-[98%] active:shadow-none "
    >
      <Image
        sizes="100vw"
        src={thumbnail}
        width={0}
        height={0}
        className="h-[182px]  w-52 object-cover justify-center"
      />
      {/* <div className="bg-gray-300 "></div> */}
      <div className="bg-prime w-full p-6 flex flex-col justify-center  transition-all ">
        <div className="text-white text-base font-bold line-clamp-4 break-all ">
          {title}
        </div>
        <div className="text-base font-normal mt-1 text-slate-400">{date}</div>
      </div>
    </Link>
  );
};
