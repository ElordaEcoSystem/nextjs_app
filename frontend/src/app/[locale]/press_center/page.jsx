import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlog } from "../needed/services";
import { useLocale } from "next-intl";
export default async function PressCenter() {
  const locale = useLocale();
  const blog = await fetchBlog(locale);
  const domain = "http://127.0.0.1:1337";

  return (
    <section className="container py-12 flex flex-col gap-4">
      {/* <h2 className="text-3xl font-bold text-prime">Новости_2</h2> */}
      <div className="flex flex-col gap-5">
        {blog?.data?.map((post) => {
          const imageUrl =
            domain + post.attributes.thumbnail?.data.attributes.url;
          return (
            <div className="grid grid-cols-[207px_auto] gap-4 " key={post.id}>
              <Image
                src={imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                className="h-52  w-52 object-cover justify-center"
              />
              <div className="py-3 px-4 inline">
                <Link
                  href={`press_center/${post.id}`}
                  className="text-lg font-bold text-prime break-all line-clamp-2"
                >
                  {post.attributes.title}
                </Link>
                <p className="text-sm mt-2 line-clamp-5 break-all">
                  {post?.attributes?.description}
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
