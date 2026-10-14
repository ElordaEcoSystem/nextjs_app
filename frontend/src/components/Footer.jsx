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

  return (
    <footer className="bg-prime text-white">
      <div className="container py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1.3fr]">
        {/* Контакты */}
        <div className="flex flex-col gap-6 text-sm">
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-leaf mt-0.5" />
            <div>
              <div className="font-semibold">{data?.title_address}</div>
              <div className="text-white/75 mt-1">{data?.address}</div>
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
          </div>
          <ul className="flex flex-col gap-3">
            {phones.map((phone, index) => (
              <li key={index} className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-leaf mt-0.5" />
                <a href={`tel:${phone.tel}`} className="group">
                  <span className="block font-semibold group-hover:text-sky transition-colors">{phone.display}</span>
                  <span className="block text-white/75">{phone.label}</span>
                </a>
              </li>
            ))}
            {data?.email && (
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-leaf mt-0.5" />
                <a href={`mailto:${data.email}`} className="hover:text-sky transition-colors break-all">
                  {data.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Разделы сайта, обращения и соцсети */}
        <div className="flex flex-col gap-6 text-sm">
          <nav>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-2">
              {links.map(([label, path]) => (
                <li key={path}>
                  <Link href={`/${locale}${path}`} className="text-white/80 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {data?.link_eOtinish && (
            <a
              href={`https://eotinish.kz/${locale}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BUTTON.outlineLight} !h-auto py-3 self-start whitespace-normal text-left leading-snug`}
            >
              {data.link_eOtinish}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <div>
            <div className="font-semibold">{data?.title_social}</div>
            <div className="flex gap-2 mt-3">
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
        </div>

        {/* Карта — только на планшетах и компьютерах */}
        <div className="hidden md:block md:col-span-2 lg:col-span-1 overflow-hidden">
          <MyMap className="!max-w-none !h-72" />
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
