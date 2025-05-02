import { fetchMainPage } from "@/app/[locale]/needed/services";
import { Logo } from "./icons/Logo";
import { useLocale } from "next-intl";
import Link from "next/link";
import { SimpleSlider } from "./SimpleSlider";


export const Banner = async ({ data }) => {
  const locale = useLocale();
  return (
    <section id="banner" className="flex flex-col justify-center min-h-[480px]">
  <div className="container flex justify-between items-center gap-4">
    <div className="flex flex-col lg:max-w-md w-full">
      <div className="text-prime text-4xl font-semibold flex flex-col">
        {data?.data[0].attributes.title.map((item) => {
          return <div key={item.children[0].text}>{item.children[0].text}</div>;
        })}
      </div>
      <div className="text-def_black text-base font-normal mt-4">
        {data?.data[0].attributes.description}
      </div>
      <div className="mt-10 flex gap-4">
        {data?.data[0].attributes.button.map((btn) => {
          return (
            <Link
              href={`/${locale}/${btn.link}`}
              className="px-5 py-1 bg-white rounded-sm text-prime font-semibold text-sm hover:scale-105 transition-all duration-300 active:scale-95"
              key={btn.title + btn.link}
            >
              {btn.title}
            </Link>
          );
        })}
      </div>
    </div>
    <div className="lg:flex lg:flex-col hidden">
      <SimpleSlider />
    </div>
  </div>
</section>

  );
};

