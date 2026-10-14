import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("not_found");
  const locale = useLocale();

  return (
    <section className="container py-20 flex flex-col gap-4 items-start">
      <h1 className="text-3xl font-bold text-def_black">{t("title")}</h1>
      <p className="text-def_black">{t("text")}</p>
      <Link
        href={`/${locale}`}
        className="px-5 py-2 bg-prime rounded-sm text-white font-semibold text-sm"
      >
        {t("home")}
      </Link>
    </section>
  );
}
