import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstaIcon } from "./icons/InstaIcon";
import { TiktokIcon } from "./icons/TiktokIcon";
import { MyMap } from "./Map";
import { fetchFooter } from "@/app/[locale]/needed/services";
import { MAP_URL, PHONES } from "@/app/[locale]/needed/contacts";

import { BUTTON } from "./ui";
const SOCIALS = [
  { href: "https://www.instagram.com/press_elordaecosystem/", label: "Instagram", Icon: InstaIcon, className: "w-5 h-5" },
  { href: "https://www.facebook.com/ElordaEcoSystem/", label: "Facebook", Icon: FacebookIcon, className: "w-4 h-4" },
  { href: "https://www.tiktok.com/@elordaecosystem", label: "TikTok", Icon: TiktokIcon, className: "w-5 h-5 fill-white" },
];

export const Footer = async () => {
  const locale = await getLocale();
  const [footerInfo, t, tHeader, tUi] = await Promise.all([
    fetchFooter(locale),
    getTranslations(),
    getTranslations("header"),
    getTranslations("ui"),
  ]);
  const data = footerInfo?.data?.[0]?.attributes;

  const phones = [
    { ...PHONES.dispatch, label: t("cds") },
    { ...PHONES.reception, label: t("reception_num") },
    { display: PHONES.reception.display, tel: PHONES.reception.tel, label: t("antiokor") },
  ];

  const links = [
    [tHeader("about.general"), "/about/general"],
    [tHeader("about.management"), "/about/management"],
    [tHeader("about.structure"), "/about/structure"],
    [tHeader("about.purchases"), "/about/purchases"],
    [tHeader("services.paid_services"), "/services/paid_services"],
    [tHeader("services.technical_conditions"), "/services/technical_conditions"],
    [tHeader("press_center"), "/press_center"],
    [tHeader("compliance"), "/compliance"],
    [tHeader("jobs"), "/jobs"],
  ];

  const columnTitle = "text-caption font-semibold uppercase text-white/50 mb-5";

  return (
    <footer className="bg-prime text-white">
      {/* Три колонки одной высоты: контакты, разделы, карта */}
      <div className="container pt-12 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1.3fr]">
        <div className="text-sm">
          <h2 className={columnTitle}>{tUi("footer_contacts")}</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-white" />
              <div>
                <div className="font-semibold">{data?.title_address}</div>
                <div className="text-white/75 mt-0.5">{data?.address}</div>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden inline-flex items-center gap-1 mt-2 text-sky hover:underline"
                >
                  {tUi("open_map")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </li>
            {phones.map((phone, index) => (
              <li key={index} className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-white" />
                <a href={`tel:${phone.tel}`} className="group">
                  <span className="block font-semibold group-hover:text-sky transition-colors">{phone.display}</span>
                  <span className="block text-white/75 mt-0.5">{phone.label}</span>
                </a>
              </li>
            ))}
            {data?.email && (
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-white" />
                <a href={`mailto:${data.email}`} className="hover:text-sky transition-colors break-all">
                  {data.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <nav className="text-sm">
          <h2 className={columnTitle}>{tUi("footer_sections")}</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-3">
            {links.map(([label, path]) => (
              <li key={path}>
                <Link href={`/${locale}${path}`} className="leading-5 text-white/75 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Карта — только на планшетах и компьютерах; тянется на высоту колонок */}
        <div className="hidden md:flex md:col-span-2 lg:col-span-1 flex-col">
          <h2 className={columnTitle}>{tUi("footer_map")}</h2>
          <div className="grow min-h-[16rem] overflow-hidden">
            <MyMap className="!max-w-none !h-full" />
          </div>
        </div>
      </div>

      {/* Обращения и соцсети */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">{data?.title_social}</span>
            <div className="flex gap-2">
              {SOCIALS.map(({ href, label, Icon, className }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Icon className={className} />
                </a>
              ))}
            </div>
          </div>
          {data?.link_eOtinish && (
            <a
              href={`https://eotinish.kz/${locale}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BUTTON.outlineLightWrap} self-start sm:self-auto`}
            >
              {data.link_eOtinish}
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-4 text-xs text-white/60">
          © {new Date().getFullYear()} ГКП на ПХВ «Elorda Eco System». {tUi("rights")}.
        </div>
      </div>
    </footer>
  );
};
