import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  fetchBlogById,
  findBlogTranslationId,
  mediaUrl,
} from "../../needed/services";
import { blocksToPlainText, formatDate, parseId } from "../../needed/format";
import { RichText } from "@/components/RichText";
import { NoTranslation } from "@/components/NoTranslation";
import { LOCALES, pageMetadata } from "../../needed/seo";
import { MyGallery } from "./MyGallery";

async function getPost(id) {
  const postId = parseId(id);
  if (!postId) return null;
  const res = await fetchBlogById(postId);
  return res?.data ?? null;
}

export async function generateMetadata({ params: { id, locale } }) {
  const post = await getPost(id);
  if (!post) return {};
  // Заглушка «нет перевода» не должна попадать в поиск
  if (post.attributes.locale !== locale) return { robots: { index: false } };

  const { title, description_rich_text, thumbnail } = post.attributes;
  const description = blocksToPlainText(description_rich_text).slice(0, 200);
  const image = mediaUrl(thumbnail?.data?.attributes?.url);

  const languages = {};
  for (const lang of LOCALES) {
    const langId = await findBlogTranslationId(post, lang);
    if (langId) languages[lang] = `/${lang}/press_center/${langId}`;
  }

  const base = pageMetadata(locale, `/press_center/${post.id}`, title);
  return {
    ...base,
    description,
    alternates: { canonical: base.alternates.canonical, languages },
    openGraph: {
      ...base.openGraph,
      type: "article",
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Post({ params: { id, locale } }) {
  const post = await getPost(id);
  if (!post) notFound();

  // Открыта версия на другом языке (например, после переключения языка) —
  // переходим на перевод, если он есть.
  if (post.attributes.locale !== locale) {
    const translationId = await findBlogTranslationId(post, locale);
    if (translationId) redirect(`/${locale}/press_center/${translationId}`);

    return (
      <NoTranslation
        originalHref={`/${post.attributes.locale}/press_center/${post.id}`}
        backHref={`/${locale}/press_center`}
      />
    );
  }

  const { title, date_of_publication, description_rich_text, thumbnail, photo_content, video_content, youtube_link } =
    post.attributes;
  const t = await getTranslations({ locale });
  // Обложку показываем, только если у поста нет своих фото и видео:
  // часто обложка — просто логотип предприятия
  const hasMedia =
    photo_content?.data?.length > 0 || video_content?.data?.length > 0 || youtube_link?.length > 0;
  const cover = !hasMedia ? thumbnail?.data?.attributes : null;

  return (
    <article className="container py-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <Breadcrumbs
          items={[
            { label: t("ui.breadcrumbs_home"), href: `/${locale}` },
            { label: t("press_center.title"), href: `/${locale}/press_center` },
            { label: title },
          ]}
        />
        <header>
          {date_of_publication && (
            <time
              dateTime={date_of_publication}
              className="text-xs font-medium uppercase tracking-wide text-accent"
            >
              {formatDate(date_of_publication, locale)}
            </time>
          )}
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-prime leading-tight">{title}</h1>
        </header>

        {cover?.url && (
          <Image
            src={mediaUrl(cover.url)}
            alt=""
            width={cover.width}
            height={cover.height}
            sizes="(min-width: 768px) 768px, 100vw"
            priority
            className="w-full h-auto max-h-[520px] object-cover"
          />
        )}

        <RichText
          content={description_rich_text}
          className="break-words text-base leading-relaxed text-def_black/90"
        />

        <MyGallery data={post.attributes} />

        <Link
          href={`/${locale}/press_center`}
          className="self-start mt-4 inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("press_center.back_to_list")}
        </Link>
      </div>
    </article>
  );
}
