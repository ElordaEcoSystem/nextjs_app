import { notFound, redirect } from "next/navigation";
import {
  fetchBlogById,
  findLocalizationId,
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
    const langId = findLocalizationId(post, lang);
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
    const translationId = findLocalizationId(post, locale);
    if (translationId) redirect(`/${locale}/press_center/${translationId}`);

    return (
      <NoTranslation
        originalHref={`/${post.attributes.locale}/press_center/${post.id}`}
        backHref={`/${locale}/press_center`}
      />
    );
  }

  const { title, date_of_publication, description_rich_text } = post.attributes;

  return (
    <section className="container py-12 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-prime">{title}</h1>
      {date_of_publication && (
        <time dateTime={date_of_publication} className="text-gray-400 text-sm">
          {formatDate(date_of_publication, locale)}
        </time>
      )}

      <RichText content={description_rich_text} className="break-words text-sm" />

      <MyGallery data={post.attributes} />
    </section>
  );
}
