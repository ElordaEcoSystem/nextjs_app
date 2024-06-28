// import Image from "next/image";
// import { useLocale } from "next-intl";
// import Link from "next/link";
// import { fetchBlogById } from "../../needed/services";

// export default async function Post({ params }) {
//   const locale = useLocale();
//   console.log("LOCALE FORM COMPONENT POST", locale);
//   let mod_id = params.id;
//   console.log("MOD_ID_до", mod_id);
//   if (locale === "ru" && params.id % 2 == 1) {
//     mod_id = parseInt(mod_id) + 1;
//   } else if (locale === "kk" && params.id % 2 == 0) {
//     mod_id = parseInt(mod_id) - 1;
//   } else {
//     mod_id = params.id;
//   }
//   console.log("MOD_ID_после", mod_id);
//   const blog = await fetchBlogById(locale, mod_id);

//   // const blog = blog.data.find(
//   //   (obj) => parseInt(obj.id, 10) === parseInt(params.id, 10)
//   // );
//   // const domain = "http://127.0.0.1:1337";
//   // const imageUrl =
//   //   domain + blog.data.attributes?.thumbnail?.data.attributes.url;
//   console.log("BLOG", blog);

//   return (
//     <section className="container py-12 flex flex-col gap-4 ">
//       <div className="flex justify-between items-center">
//         <h2 className="text-3xl font-bold text-prime break-all">
//           {blog?.data?.attributes?.title}
//         </h2>
//         {/* <Link
//           className="px-5 py-1 bg-prime rounded-sm text-white font-semibold text-sm hover:scale-110 transition-all duration-300"
//           href={`/${locale}/press_center`}
//         >
//           Назад
//         </Link> */}
//       </div>
//       <p className="break-all text-sm">{blog?.data?.attributes?.description}</p>

//       <div className="flex flex-col gap-5">
//         <div className="flex">
//           {/* <Image
//             src={imageUrl}
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="h-52 w-52 object-cover justify-center"
//           ></Image> */}
//         </div>
//       </div>
//     </section>
//   );
// }

//vol 2

function distributorOfId(id, locale) {
  let res = id;
  if (locale === "ru" && id % 2 == 1) {
    res = parseInt(res) + 1;
  } else if (locale === "kk" && id % 2 == 0) {
    res = parseInt(res) - 1;
  } else {
    res = id;
  }
  return res;
}

import { useLocale } from "next-intl";
import { fetchBlogById } from "../../needed/services";
import { MyGallery } from "./MyGallery";

export default async function Post({ params }) {
  const locale = useLocale();
  const blogById = await fetchBlogById(
    locale,
    distributorOfId(params.id, locale)
  );
  // console.log(
  //   "BLOGBYID",
  //   blogById.data.attributes.description_rich_text[0].children[0].text
  // );
  return (
    <section className="container py-12 flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold text-prime break-all">
        {blogById?.data?.attributes?.title}
      </h2>
      {/* <Link
          className="px-5 py-1 bg-prime rounded-sm text-white font-semibold text-sm hover:scale-110 transition-all duration-300"
          href={`/${locale}/press_center`}
        >
          Назад
        </Link> */}
      <p className="break-all text-sm">
        {blogById?.data?.attributes?.description_rich_text?.map((item) => {
          return <div>{item.children[0].text}</div>;
        })}
      </p>
      <MyGallery data={blogById.data.attributes} />
    </section>
  );
}
