import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { PageTitle } from "@/components/PageTitle";

import { BUTTON } from "@/components/ui";
export default function NotFound() {
  const t = useTranslations("not_found");
  const locale = useLocale();

  return (
    <section className="container py-20 flex flex-col gap-4 items-start">
      <PageTitle>{t("title")}</PageTitle>
      <p className="text-def_black">{t("text")}</p>
      <Link
        href={`/${locale}`}
        className={BUTTON.primary}
      >
        {t("home")}
      </Link>
    </section>
  );
}
