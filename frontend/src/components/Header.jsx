import Link from "next/link";
import { Logo } from "./icons/Logo";
import { fetchNav } from "@/app/[locale]/needed/services";
import { LocaleButton } from "./LocaleButton";
import { Navs } from "./Navs";

export const Header = async ({ locale }) => {
  const data = await fetchNav(locale);

  return (
    <div
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center"
    >
      <div className="container flex justify-between gap-2 h-full ">
        <Link
          href="/"
          className="text-prime font-bold text-2xl flex flex-col justify-center"
        >
          <Logo className="w-[70px] fill-prime" />
        </Link>
        <Navs data={data} locale={locale} />
        <LocaleButton className="block " locale={locale}></LocaleButton>
      </div>
    </div>
  );
};
