import { useLocale } from "next-intl";
import Link from "next/link";
import { SimpleSlider } from "./SimpleSlider";
import { blockText } from "@/app/[locale]/needed/format";

export const Banner = ({ data }) => {
  const locale = useLocale();
  const entry = data?.data?.[0]?.attributes;

  return (
    <section id="banner" className="flex flex-col justify-center py-20">
      <div className="container flex justify-between items-center gap-4">
        <div className="flex flex-col lg:max-w-md w-full">
          <h1 className="text-prime text-4xl font-semibold flex flex-col">
            {entry?.title?.map((item, index) => (
              <span key={index}>{blockText(item)}</span>
            ))}
          </h1>
          <div className="text-def_black text-base font-normal mt-4">
            {entry?.description}
          </div>
          <div className="mt-10 flex gap-4">
            {entry?.button?.map((btn) => (
              <Link
                href={`/${locale}/${btn.link}`}
                className="px-5 py-1 h-[34px] shadow-md content-center bg-prime rounded-sm text-white font-semibold text-sm hover:scale-105 transition-all duration-300 active:scale-95"
                key={btn.title + btn.link}
              >
                {btn.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:flex lg:flex-col hidden">
          <SimpleSlider />
        </div>
      </div>
    </section>
  );
};
