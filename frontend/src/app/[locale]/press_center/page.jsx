// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { fetchBlog } from "../needed/services";
// import { useLocale } from "next-intl";
// export default async function PressCenter() {
//   const locale = useLocale();
//   const blog = await fetchBlog(locale);
//   const domain = "http://127.0.0.1:1337";

//   return (
//     <section className="container py-12 flex flex-col gap-4">
//       {/* <h2 className="text-3xl font-bold text-prime">Новости_2</h2> */}
//       <div className=" grid gap-5 sm:flex sm:flex-col grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] ">
//         {/*gap-5 sm:flex sm:flex-col  */}
//         {blog?.data?.map((post) => {
//           const imageUrl =
//             domain + post.attributes.thumbnail?.data.attributes.url;
//           return (
//             <div className=" flex sm:flex-row flex-col " key={post.id}>
//               {/* grid grid-cols-[207px_auto] gap-4 */}
//               <Image
//                 src={imageUrl}
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 className="h-52  w-52 object-cover justify-center sm:mx-0 mx-auto "
//               />
//               <div className="py-3 px-4 sm:w-auto sm:m-0 w-52 mx-auto">
//                 {/* inline */}
//                 <Link
//                   href={`press_center/${post.id}`}
//                   className="text-lg font-bold text-prime break-all line-clamp-2"
//                 >
//                   {post.attributes.title}
//                 </Link>
//                 <p className="text-sm mt-2 line-clamp-5 break-all">
//                   {post?.attributes?.description}
//                 </p>
//                 <div className="text-gray-400 text-sm mt-2">
//                   {post.attributes.date_of_publication}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

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
      <div className=" grid gap-5 sm:flex sm:flex-col grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]  ">
        {/* <div className=" grid gap-5 sm:flex sm:flex-col grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] "> */}
        {/*gap-5 sm:flex sm:flex-col  */}
        {blog?.data?.map((post) => {
          const imageUrl =
            domain +
            post.attributes.thumbnail?.data.attributes.formats.small.url;
          return (
            <div
              className=" grid sm:grid-cols-[208px_,auto] grid-flow-row "
              key={post.id}
            >
              <Image
                src={imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                className="sm:h-52 sm:w-52 h-60 w-60 object-cover justify-center sm:mx-0 mx-auto "
              />
              <div className="sm:px-3 py-3 px-0 sm:w-auto sm:m-0 w-60 mx-auto">
                <Link
                  href={`press_center/${post.id}`}
                  className="text-lg font-bold text-prime break-all line-clamp-2 "
                >
                  {post.attributes.title}
                </Link>

                <p className="text-sm mt-2 line-clamp-4 break-all">
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

// function distributorOfId(id, locale) {
//   let res = id;
//   if (locale === "ru" && id % 2 == 1) {
//     res = parseInt(res) + 1;
//   } else if (locale === "kk" && id % 2 == 0) {
//     res = parseInt(res) - 1;
//   } else {
//     res = id;
//   }
//   return res;
// }
