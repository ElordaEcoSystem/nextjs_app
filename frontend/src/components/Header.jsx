import Link from "next/link";
import { Logo } from "./icons/Logo";
import { fetchNav } from "@/app/[locale]/needed/services";
import { LocaleButton } from "./LocaleButton";

export const Header = async ({ locale }) => {
  const nav_items = await fetchNav(locale);

  return (
    <div
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center"
    >
      <div className="container flex justify-around">
        <Link href="/" className="text-prime font-bold text-2xl">
          <Logo className="w-[85px] fill-prime" />
        </Link>
        <nav className="flex justify-center">
          <ul className="flex gap-6 text-prime font-semibold text-base items-center">
            {nav_items?.data.map((item) => (
              <Link href={`/${locale}/${item.attributes.link}`}>
                {item.attributes.nav_one}
              </Link>
            ))}
            {/* <Link href={`/${locale}/l}`}>test</Link> */}
          </ul>
        </nav>
        <LocaleButton locale={locale}></LocaleButton>
      </div>
    </div>
  );
};

// onChangeLangeage(e.target.value);
