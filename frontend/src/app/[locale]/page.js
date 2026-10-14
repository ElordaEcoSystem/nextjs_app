// import Image from 'next/image'

import { Banner } from "@/components/Banner";
import { News } from "@/components/News";
import { Perform } from "@/components/Perform/Perform";
import { useLocale } from "next-intl";
import { fetchMainPage, fetchPerformBlocks } from "./needed/services";
import { getTranslations } from "next-intl/server";
import { staticPageMetadata } from "./needed/seo";

export const generateMetadata = staticPageMetadata("");

export default async function Home() {
  // const t = useTranslations("Index");
  const locale = useLocale();
  const data = await fetchMainPage(locale);
  const perform_data = await fetchPerformBlocks(locale);
  const t = await getTranslations();

  return (
    <>
      <Banner data={data} />
      <Perform perform_data={perform_data} title={t("perform_title")} />
      <News data={data} />
    </>
  );
}
