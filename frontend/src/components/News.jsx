import React from "react";

import { ArrowIcon } from "./icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import { fetchBlog, mediaUrl } from "@/app/[locale]/needed/services";
import { blocksToPlainText, formatDate } from "@/app/[locale]/needed/format";
import { getLocale } from "next-intl/server";

export const News = async ({ data }) => {
  const locale = await getLocale();
  const news = await fetchBlog(locale, { pageSize: 4 });
  const posts = news?.data ?? [];
  const page = data?.data?.[0]?.attributes;
  const button = page?.news_button?.[0];

  if (posts.length === 0) return null;
  const [main, ...rest] = posts;

  return (
    <section id="news" className="py-20 container ">
      <div className="flex justify-between items-center">
        <h3 className="text-def_black text-3xl font-bold">{page?.news_title}</h3>
        {button && (
          <Link
            href={`/${locale}/${button.link}`}
            aria-label={button.title}
            className="flex items-center gap-2 bg-white py-2 px-4 shadow-md rounded  hover:scale-[102%] transition-all text-prime text-sm font-bold leading-6 active:scale-95"
          >
            <div className="hidden sm:block">{button.title}</div>
            <ArrowIcon className="h-4 stroke-[4px] w-auto stroke-prime" />
          </Link>
        )}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-[5px] mt-10 ">
        <Link
          href={`/${locale}/press_center/${main.id}`}
          className="h-full flex-col transition-all active:scale-[98%]  flex border border-secondary"
        >
          <div className="h-full bg-slate-400 ">
            {thumbnailUrl(main) && (
              <Image
                width={0}
                height={0}
                sizes="(min-width: 728px) 50vw, 100vw"
                alt=""
                src={thumbnailUrl(main)}
                className="h-[448px] w-full object-cover"
              />
            )}
          </div>

          <div className="bottom-0 w-full bg-base-color px-5 py-4 bg-white ">
            <div className="text-prime text-xl font-bold line-clamp-1 break-words">
              {main.attributes.title}
            </div>
            <div className="text-sm font-normal mt-2 text-def_black break-words line-clamp-1 ">
              {blocksToPlainText(main.attributes.description_rich_text)}
            </div>

            <div className="text-zinc-400 text-sm font-normal mt-1 ">
              {formatDate(main.attributes.date_of_publication, locale)}
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-between gap-[5px] ">
          {rest.map((item) => (
            <LittleNews
              key={item.id}
              title={item.attributes.title}
              date={formatDate(item.attributes.date_of_publication, locale)}
              id={item.id}
              thumbnail={thumbnailUrl(item, "small")}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function thumbnailUrl(post, format) {
  const thumbnail = post.attributes.thumbnail?.data?.attributes;
  return mediaUrl(thumbnail?.formats?.[format]?.url ?? thumbnail?.url);
}

const LittleNews = ({ thumbnail, title, date, id, locale }) => {
  return (
    <Link
      href={`/${locale}/press_center/${id}`}
      className="grid grid-cols-[180px_,auto] border border-secondary hover:scale-[102%] transition-all"
    >
      {thumbnail ? (
        <Image
          sizes="180px"
          src={thumbnail}
          alt=""
          width={180}
          height={180}
          className="h-[180px]  w-[180px] object-cover md:m-0 mx-auto block"
        />
      ) : (
        <div className="h-[180px] w-[180px] bg-secondary" />
      )}
      <div className="bg-white w-full lg:p-5 px-4 py-5 flex flex-col justify-center  transition-all ">
        <div className="text-prime line-clamp-2 text-lg font-bold lg:break-normal break-words leading-5">
          {title}
        </div>
        <div className="text-sm font-normal mt-3 text-zinc-400">{date}</div>
      </div>
    </Link>
  );
};
