import { Banner } from "@/components/Banner";
import { News } from "@/components/News";
import { Perform } from "@/components/Perform/Perform";
import { fetchMainPage, fetchPerformBlocks } from "./needed/services";
import { getTranslations } from "next-intl/server";
import { staticPageMetadata } from "./needed/seo";

export const generateMetadata = staticPageMetadata("");

export default async function Home({ params: { locale } }) {
  const [data, perform_data, t] = await Promise.all([
    fetchMainPage(locale),
    fetchPerformBlocks(locale),
    getTranslations(),
  ]);

  return (
    <>
      <Banner data={data} />
      <Perform perform_data={perform_data} title={t("perform_title")} />
      <News data={data} />
    </>
  );
}
