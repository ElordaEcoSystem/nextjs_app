// import Image from 'next/image'

import { Banner } from "@/components/Banner";
import { News } from "@/components/News";
import { Perform } from "@/components/Perform/Perform";
import { useLocale, useTranslations } from "next-intl";
import { fetchMainPage } from "./needed/services";

export default async function Home() {
  // const t = useTranslations("Index");
  const locale = useLocale();
  const data = await fetchMainPage(locale);

  return (
    <main className="">
      <Banner data={data} />
      {/* <Perform /> */}
      <News data={data} />
    </main>
  );
}
