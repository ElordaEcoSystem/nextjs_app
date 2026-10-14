import Link from "next/link";
import { getTranslations } from "next-intl/server";

// Показывается, когда запись существует, но на текущем языке её нет
export const NoTranslation = async ({ originalHref, backHref, backLabel }) => {
  const t = await getTranslations("press_center");

  return (
    <section className="container py-12 flex flex-col gap-4 items-start">
      <p className="text-lg text-def_black">{t("no_translation")}</p>
      <div className="flex flex-wrap gap-4">
        {originalHref && (
          <Link
            href={originalHref}
            className="px-5 py-2 bg-prime rounded-sm text-white font-semibold text-sm"
          >
            {t("read_original")}
          </Link>
        )}
        <Link
          href={backHref}
          className="px-5 py-2 border border-prime rounded-sm text-prime font-semibold text-sm"
        >
          {backLabel ?? t("back_to_list")}
        </Link>
      </div>
    </section>
  );
};
