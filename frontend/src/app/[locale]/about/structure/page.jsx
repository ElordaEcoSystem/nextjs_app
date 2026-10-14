import { useTranslations } from "next-intl";
import Image from "next/image";
import { staticPageMetadata } from "../../needed/seo";

import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/about/structure", "header.about.structure");

export default function About() {

  return (
    <>
   <div className="container py-8 flex flex-col gap-4 ">
   <Strucure className=""/>

   </div>
    </>
  );
}


const Strucure = ({className}) => {
  const t = useTranslations();
  return (
    <div className={className}>
        <PageTitle>{t("structure_title")}</PageTitle>
        <div className="mt-4">

        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt="structure"
          src="/structure-v3.jpg"
          className=" w-full object-cover"
          />
        </div>
    </div>
  )
}