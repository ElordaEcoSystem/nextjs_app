import Image from "next/image";
import { fetchBlogOne } from "@/app/[locale]/needed/services";
import { useLocale } from "next-intl";
import Link from "next/link";

export default async function Post({ params }) {
  const locale = useLocale();
  const blog = await fetchBlogOne(locale, params.id);

  // const blog = blog.data.find(
  //   (obj) => parseInt(obj.id, 10) === parseInt(params.id, 10)
  // );
  const domain = "http://127.0.0.1:1337";
  const imageUrl =
    domain + blog.data.attributes?.thumbnail?.data.attributes.url;

  return (
    <section className="container py-12 flex flex-col gap-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-prime">
          {blog.data.attributes.title}
        </h2>
        <Link
          className="px-5 py-1 bg-prime rounded-sm text-white font-semibold text-sm hover:scale-110 transition-all duration-300"
          href={`/${locale}/press_center`}
        >
          Назад
        </Link>
      </div>
      <p>{blog.data.attributes.description}</p>

      <div className="flex flex-col gap-5">
        <div className="flex">
          <Image
            src={imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            className="h-52 w-52 object-cover justify-center"
          ></Image>
        </div>
      </div>
    </section>
  );
}
