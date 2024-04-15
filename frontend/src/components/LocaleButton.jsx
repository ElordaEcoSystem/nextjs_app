"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export const LocaleButton = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  function onChangeLangeage(currentLanguage) {
    console.log(currentLanguage);
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
      className="text-prime font-semibold text-base "
      onClick={(e) => {
        onChangeLangeage(e.target.value);
      }}
    >
      {locale}
    </button>
  );
};
