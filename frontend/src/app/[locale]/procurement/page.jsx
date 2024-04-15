import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function Procurement() {
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold text-prime">
        Планы закупок товаров, работ и услуг
      </h2>
      <div className="flex flex-col gap-3 mt-4">
        <Link href="/document_procurment/План-2023.xls">План 2023</Link>
        <Link href="/document_procurment/Приказ_2023.pdf">Приказ 2023</Link>
      </div>
    </div>
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
