// import Image from 'next/image'

import { Banner } from "@/components/Banner";
import { News } from "@/components/News";
import { Perform } from "@/components/Perform/Perform";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="">
      <Banner />
      {/* <Perform /> */}
      <News />
    </main>
  );
}
