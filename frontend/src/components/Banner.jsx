import { fetchMainPage } from "@/app/[locale]/needed/services";
import { Logo } from "./icons/Logo";
import { useLocale } from "next-intl";
import Link from "next/link";
export const Banner = async () => {
  const locale = useLocale();
  const main_page = await fetchMainPage(locale);

  // console.log("for test", main_page.data[0].attributes.button);
  return (
    <section id="banner" className="bg-prime">
      <div className="container flex justify-between gap-8">
        <div className="flex flex-col max-w-md  py-32">
          <div className="text-white text-4xl font-semibold">
            {/* ГКП на ПХВ <br />
            "ELORDA ECO SYSTEM" <br /> акимата города Астана */}
            {main_page.data[0].attributes.title}
          </div>
          <div className="text-white text-sm font-normal mt-10">
            {main_page.data[0].attributes.description}
          </div>
          <div className=" mt-10 flex gap-4">
            {main_page.data[0].attributes.button.map((btn) => {
              return (
                <Link
                  href={`/${btn.link}`}
                  className="px-5 py-1 bg-white rounded-sm text-prime font-semibold text-sm hover:scale-105 transition-all duration-300"
                >
                  {btn.title}
                </Link>
              );
            })}
            {/* <Link
              href={"/about"}
              className="px-5 py-1 bg-white rounded-sm text-prime font-semibold text-sm hover:scale-105 transition-all duration-300"
            >
              Об организаций
            </Link>
            <Link
              href="/press_center"
              className="px-5 py-1 bg-white rounded-sm text-prime font-semibold text-sm hover:scale-105 transition-all duration-300"
            >
              Пресс центр
            </Link> */}
          </div>
        </div>
        <div className="py-40">
          <Logo className="w-full h-full object-cover fill-white"></Logo>
        </div>
      </div>
    </section>
  );
};
