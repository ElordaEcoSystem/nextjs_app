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
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ListMarker, BULLET_PREFIX } from "@/components/ListMarker";

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

  return <Biography data={director.attributes} locale={locale} />;
}
const Biography = ({ data, locale }) => {
  const t = useTranslations();
  const { position, full_name, reception_schedule, number, photo, biography } = data;
  const imageUrl = mediaUrl(photo?.data?.attributes?.url);

  return (
    <section className="container py-10">
      <Breadcrumbs
        items={[
          { label: t("ui.breadcrumbs_home"), href: `/${locale}` },
          { label: t("header.about.management"), href: `/${locale}/about/management` },
          { label: full_name },
        ]}
      />
      <div className="mt-8 grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
        <aside className="flex flex-col gap-6">
          {imageUrl && (
            <div className="relative w-full max-w-[320px] aspect-[4/5] bg-secondary">
              <Image
                src={imageUrl}
                alt={full_name}
                fill
                priority
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover object-top"
              />
            </div>
          )}
          {(number || reception_schedule) && (
            <dl className="grid gap-3 text-sm border-t border-secondary pt-5">
              {number && (
                <div>
                  <dt className="text-muted">{t("contact")}</dt>
                  <dd className="text-prime font-medium">{number}</dd>
                </div>
              )}
              {reception_schedule && (
                <div>
                  <dt className="text-muted">{t("reception")}</dt>
                  <dd className="text-prime font-medium">{reception_schedule}</dd>
                </div>
              )}
            </dl>
          )}
        </aside>

        <div className="max-w-3xl">
          <h1 className="text-h1-sm md:text-h1 font-bold text-prime">{full_name}</h1>
          <p className="mt-3 text-lead text-def_black/70">{position}</p>
          <span aria-hidden="true" className="block w-12 h-1 bg-leaf mt-6" />

          <h2 className="mt-10 text-h2-sm font-bold text-prime">{t("biography_button")}</h2>
          <div className="mt-4 text-body text-def_black/85">
            {biography?.map((block, index) => {
              const text = block.children?.map((child) => child.text).join("").trim();
              if (!text) return null;
              // Подзаголовок: абзац жирным или короткая строка с двоеточием в конце
              // («Образование:», «Опыт работы:»)
              if (block.children?.[0]?.bold || (text.endsWith(":") && text.length < 60)) {
                return (
                  <h3 key={index} className="text-h4 font-bold text-prime mt-8 first:mt-0">
                    {text.replace(/:$/, "")}
                  </h3>
                );
              }
              // Пункт списка «• …» / «– …» — плотно, с висячим маркером
              if (BULLET_PREFIX.test(text)) {
                return (
                  <p key={index} className="mt-2 first:mt-0 pl-5 relative">
                    <ListMarker />
                    {text.replace(BULLET_PREFIX, "")}
                  </p>
                );
              }
              return (
                <p key={index} className="mt-3 first:mt-0">
                  {text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
