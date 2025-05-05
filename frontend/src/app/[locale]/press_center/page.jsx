import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlog } from "../needed/services";
import { useLocale } from "next-intl";

export default async function PressCenter() {
  const locale = useLocale();
  const blog = await fetchBlog(locale);

  const translations = {
    kk: {
      title: "Баспасөз орталығы"
    },
    ru:{
      title: "Пресс-центр"
    }
  }
  const t = translations[locale] || translations.kk;
  // Используем API-URL из переменной окружения
  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";

  return (
    <section className="container py-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-def_black">{t.title}</h1>
      <div className="grid gap-5 sm:flex sm:flex-col grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        {blog?.data?.map((post) => {
          // Проверяем, есть ли изображение
          const imageUrl = post.attributes.thumbnail?.data?.attributes?.formats
            ?.small?.url
            ? `${domain}${post.attributes.thumbnail.data.attributes.formats.small.url}`
            : "/placeholder.jpg"; // Фолбэк, если нет изображения

          return (
            <div
              className="grid sm:grid-cols-[208px_,auto] grid-flow-row"
              key={post.id}
            >
              <Image
                src={imageUrl}
                width={208}
                height={208}
                sizes="100vw"
                alt={post.attributes.title || "Изображение"}
                className="sm:h-52 sm:w-52 h-60 w-60 object-cover justify-center sm:mx-0 mx-auto"
              />
              <div className="sm:px-3 py-3 px-0 sm:w-auto sm:m-0 w-60 mx-auto">
                <Link
                  href={`press_center/${post.id}`}
                  className="text-lg font-bold text-prime break-words line-clamp-2"
                >
                  {post.attributes.title}
                </Link>

                <p className="text-sm mt-2 line-clamp-4 break-words">
                  {post.attributes?.description_rich_text?.map(
                    (item, index) => (
                      <span key={index}>{item.children[0].text} </span>
                    )
                  )}
                </p>
                <div className="text-gray-400 text-sm mt-2">
                  {post.attributes.date_of_publication}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
