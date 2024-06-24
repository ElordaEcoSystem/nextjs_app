"use client";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export const LocaleButton = ({ className }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  function onChangeLangeage(currentLanguage) {
    // console.log(currentLanguage);
    const newLanguage = currentLanguage === "kk" ? "ru" : "kk";
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = newLanguage;
    const newUrl = segments.join("/");
    startTransition(() => {
      router.push(newUrl);
    });
  }
  return (
    <button
      key={locale}
      value={locale}
      className={clsx(
        "text-prime font-semibold  block   hover:bg-secondary transition-all text-sm ",
        className
      )}
      onClick={(e) => {
        onChangeLangeage(e.target.value);
      }}
    >
      {locale}
    </button>
  );
};
