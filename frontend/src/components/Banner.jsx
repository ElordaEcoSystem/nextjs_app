import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import clsx from "clsx";
import { Phone } from "lucide-react";
import { SimpleSlider } from "./SimpleSlider";
import { blockText } from "@/app/[locale]/needed/format";
import { PHONES } from "@/app/[locale]/needed/contacts";

export const Banner = ({ data }) => {
  const locale = useLocale();
  const t = useTranslations("ui");
  const entry = data?.data?.[0]?.attributes;

  return (
    <section
      id="banner"
      className="bg-gradient-to-b from-secondary/60 to-white py-12 lg:py-20 overflow-hidden"
    >
      <div className="container grid lg:grid-cols-[minmax(0,1fr)_480px] items-center gap-10">
        <div className="flex flex-col min-w-0">
          <h1 className="text-prime text-3xl sm:text-4xl font-bold leading-tight flex flex-col">
            {entry?.title?.map((item, index) => (
              <span key={index}>{blockText(item)}</span>
            ))}
          </h1>
          <p className="text-def_black/80 text-lg mt-5 max-w-xl">
            {entry?.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {entry?.button?.map((btn, index) => (
              <Link
                href={`/${locale}/${btn.link}`}
                key={btn.title + btn.link}
                className={clsx(
                  "px-6 py-3 rounded font-semibold text-sm transition-colors",
                  index === 0
                    ? "bg-prime text-white hover:bg-accent"
                    : "border-2 border-prime text-prime hover:bg-prime hover:text-white"
                )}
              >
                {btn.title}
              </Link>
            ))}
          </div>

          <a
            href={`tel:${PHONES.dispatch.tel}`}
            className="mt-8 flex items-center gap-4 self-start rounded-lg border-l-4 border-leaf bg-white shadow-sm px-5 py-4 hover:shadow-md transition-shadow"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf/10 text-leaf">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm text-muted">{t("dispatch_cta")}</span>
              <span className="text-xl font-bold text-prime">{PHONES.dispatch.display}</span>
            </span>
          </a>
        </div>
        <div className="w-full min-w-0 max-w-[520px] mx-auto lg:mx-0">
          <SimpleSlider className="shadow-xl rounded-lg" />
        </div>
      </div>
    </section>
  );
};
