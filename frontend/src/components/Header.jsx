import Link from "next/link";
import { Logo } from "./icons/Logo";
import { fetchNav } from "@/app/[locale]/needed/services";
import { LocaleButton } from "./LocaleButton";

export const Header = async ({ locale }) => {
  const navs = await fetchNav(locale);

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
        <nav className="flex w-max justify-between">
          <ul className="flex  text-prime justify-between gap-4 font-semibold text-base items-center ">
            {navs?.data.map((item) => (
              <Link
                href={`/${locale}/${item.attributes.link}`}
                key={item.attributes.title}
                className="text-center hover:bg-secondary transition-all h-full text-sm justify-center flex flex-col active:text-[13.5px]"
              >
                {item.attributes.title}
              </Link>
            ))}
            {/* <Link href={`/${locale}/l}`}>test</Link> */}
          </ul>
        </nav>
        <LocaleButton className="block " locale={locale}></LocaleButton>
      </div>
    </div>
  );
};

// onChangeLangeage(e.target.value);
