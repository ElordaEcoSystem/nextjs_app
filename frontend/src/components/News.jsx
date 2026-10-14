import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchBlog } from "@/app/[locale]/needed/services";
import { getLocale } from "next-intl/server";
import { NewsCard } from "./NewsCard";

export const News = async ({ data }) => {
  const locale = await getLocale();
  const news = await fetchBlog(locale, { pageSize: 4 });
  const posts = news?.data ?? [];
  const page = data?.data?.[0]?.attributes;
  const button = page?.news_button?.[0];

  if (posts.length === 0) return null;
  const [main, ...rest] = posts;

  return (
    <section id="news" className="py-12 lg:py-14 container">
      <div className="flex justify-between items-end gap-4">
        <h2 className="text-prime text-h2-sm md:text-h2 font-bold">{page?.news_title}</h2>
        {button && (
          <Link
            href={`/${locale}/${button.link}`}
            className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
          >
            {button.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <NewsCard post={main} locale={locale} featured />
        <div className="grid md:grid-rows-3 gap-4">
          {rest.map((item) => (
            <NewsCard key={item.id} post={item} locale={locale} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
};
