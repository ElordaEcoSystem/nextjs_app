"use client";
import clsx from "clsx";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const TARGET = {
  kk: { locale: "ru", label: "РУС", title: "Русский язык" },
  ru: { locale: "kk", label: "ҚАЗ", title: "Қазақ тілі" },
};

// Ссылка на ту же страницу на другом языке. Для поста или руководителя
// страница сама перенаправит на id перевода.
export const LocaleButton = ({ className }) => {
  const locale = useLocale();
  const pathname = usePathname() || `/${locale}`;
  const target = TARGET[locale] ?? TARGET.kk;

  const segments = pathname.split("/");
  segments[1] = target.locale;

  return (
    <Link
      href={segments.join("/")}
      hrefLang={target.locale}
      lang={target.locale}
      title={target.title}
      aria-label={target.title}
      prefetch={false}
      className={clsx(
        "text-prime font-semibold  block hover:bg-secondary transition-all text-sm ",
        className
      )}
    >
      {target.label}
    </Link>
  );
};
