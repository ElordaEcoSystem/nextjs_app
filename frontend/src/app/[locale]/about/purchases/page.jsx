import Link from "next/link";
import React from "react";
import { fetchProcurement } from "../../needed/services";
import { useLocale } from "next-intl";

export default async function Procurement() {
  const locale = useLocale();
  const data = await fetchProcurement(locale);
  const domain = process.env.NEXT_PUBLIC_API_URL;
  // console.log("ANTIKOR", data.data[0].attributes.title);
  console.log(
    "PROCUREMENT",
    data.data[0].attributes.document_2[0].item_document.data.attributes.url
  );

  return (
    <section className="mb-auto container py-8">
      <h2 className="text-3xl font-bold text-prime ">
        {data.data[0].attributes.title}
      </h2>
      <div className="mt-4">
        {data.data[0].attributes.document_2.map((item) => {
          {
            console.log("item", item?.item_document?.data?.attributes?.url);
            console.log("domain", domain);
            console.log(
              "Vmeste",
              domain + item?.item_document?.data?.attributes?.url
            );
          }

          return (
            // <div>{item.item_document}</div>
            <Link
              className="hover:text-prime hover:bg-secondary transition-all table"
              href={domain + item?.item_document?.data?.attributes?.url}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
// "use client";
// import React, { useState, useEffect } from "react";

// export default function testus() {
//   const [folders, setFolders] = useState([]);

//   useEffect(() => {
//     async function fetchFolders() {
//       try {
//         const response = await fetch("/api/folders");
//         if (!response.ok) {
//           throw new Error("Failed to fetch folder names");
//         }
//         const data = await response.json();
//         setFolders(data.folders);
//       } catch (error) {
//         console.error("Error fetching folder names:", error);
//       }
//     }

//     fetchFolders();
//   }, []);

//   return (
//     <div>
//       <h1>Folder Names:</h1>
//       <ul>
//         {folders.map((folder, index) => (
//           <li key={index}>{folder}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
