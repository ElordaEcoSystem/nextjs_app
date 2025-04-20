import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { Navs } from "./Navs";

export const Header = ({ data, locale }) => {
  // console.log("LOCALE FROM HEADER", locale);
  const t = useTranslations("header");
  const header_data = [
      {
      title: t("home"),
      link: "/",
    },
    {
      title: t("about"),
      link: "/about",
    },
    {
      title: t("press_center"),
      link: "/press_center",
    },
    {
      title: t("compliance"),
      link: "/compliance",
    },
    {
      title: t("jobs"),
      link: "/jobs",
    },
    {
      title: t("procurement"),
      link: "/procurement",
    },
    {
      title: t("requestPTO"),
      link: "/requestPTO",
    },
  ]
  return (
    // <div className="bg-prime w-screen h-[100vh] absolute opacity-50 ">

    <div
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center bg-white  w-full fixed z-50 top-0"
    >
      <div className="container flex justify-between  h-full bg-white  gap-2 ">
        <Link
          href="/"
          className="text-prime font-bold text-2xl flex flex-col justify-center"
        >
          {/* <Logo className="w-[70px] fill-prime" /> */}
          <Image
                  sizes="100vw"
                  src="/image/logo.png"
                  alt={"logo"}
                  width={0}
                  height={0}
                  className="h-[72px]  w-[72px] object-contain md:m-0 mx-auto block"
                />
        </Link>

        <Navs header_data={header_data} locale={locale}/>

      </div>
    </div>
    // </div>
  );
};

