import {
  fetchDirectorById,
  findLocalizationId,
  mediaUrl,
} from "@/app/[locale]/needed/services";
import { parseId } from "@/app/[locale]/needed/format";
import { LOCALES, pageMetadata } from "@/app/[locale]/needed/seo";
import { NoTranslation } from "@/components/NoTranslation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";

async function getDirector(id) {
  const directorId = parseId(id);
  const data = directorId ? await fetchDirectorById(directorId) : null;
  return data?.data ?? null;
}

export async function generateMetadata({ params: { locale, id } }) {
  const director = await getDirector(id);
  if (!director) return {};
  // Заглушка «нет перевода» не должна попадать в поиск
  if (director.attributes.locale !== locale) return { robots: { index: false } };

  const languages = {};
  for (const lang of LOCALES) {
    const langId = findLocalizationId(director, lang);
    if (langId) languages[lang] = `/${lang}/about/management/${langId}`;
  }
  const base = pageMetadata(
    locale,
    `/about/management/${director.id}`,
    director.attributes.full_name
  );
  return {
    ...base,
    description: director.attributes.position,
    alternates: { canonical: base.alternates.canonical, languages },
  };
}

export default async function BiographyWrapper({ params: { locale, id } }) {
  const director = await getDirector(id);
  if (!director) notFound();

  // Открыта версия на другом языке — переходим на перевод, если он есть
  if (director.attributes.locale !== locale) {
    const translationId = findLocalizationId(director, locale);
    if (translationId) redirect(`/${locale}/about/management/${translationId}`);

    const t = await getTranslations("header.about");
    return (
      <NoTranslation
        originalHref={`/${director.attributes.locale}/about/management/${director.id}`}
        backHref={`/${locale}/about/management`}
        backLabel={t("management")}
      />
    );
  }

  return <Biography data={director.attributes} />;
}
const Biography = ({ data }) => {
  const t = useTranslations();

  const {
    position,
    full_name,
    reception_schedule,
    number,
    photo,
    biography,
  } = data;
  const imageUrl = mediaUrl(photo?.data?.attributes?.url);

  return (
    <section className="container py-12 flex flex-col gap-4 min-h-screen">
      <div className="grid sm:grid-cols-[300px_1fr] grid-cols-1 h-full">
        <div className="p-5 flex gap-4 border-gray-200 flex-col border-b-2 sm:border-b-0 sm:border-r-2 w-full h-full flex-1">
          {imageUrl && (
            <div className="relative w-full aspect-square flex-shrink-0">
              <Image
                src={imageUrl}
                alt={full_name}
                fill
                sizes="(min-width: 600px) 300px, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="pt-2 flex flex-col h-full">
            <div className="text-2xl text-prime font-bold">{full_name}</div>
            <div className="text-lg">{position}</div>
            {(number || reception_schedule) && (
              <div className="mt-3">
                {number && (
                  <div className="text-base text-black flex flex-col">
                    <div className="text-zinc-500">{t("contact")}</div>
                    <div className="text-prime font-medium">{number}</div>
                  </div>
                )}
                {reception_schedule && (
                  <div className="flex flex-col">
                    <div className="text-zinc-500">{t("reception")}</div>
                    <div className="text-prime font-medium">
                      {reception_schedule}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="p-4">
          <div className="text-3xl font-bold">{t("biography_button")}</div>
          {biography?.map((text, index) => (
            <div
              key={index}
              className={`${text.children?.[0]?.bold ? "text-xl font-bold" : ""} mt-2`}
            >
              {text.children?.map((child) => child.text).join("")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
