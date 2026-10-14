import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchAbout, fetchDirectors, mediaUrl } from "../../needed/services";
import { staticPageMetadata } from "../../needed/seo";
import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/about/management", "header.about.management");

export default async function About({ params: { locale } }) {
  const [about, directors] = await Promise.all([
    fetchAbout(locale),
    fetchDirectors(locale),
  ]);

  return (
    <section className="container py-10">
      <PageTitle>{about?.data?.[0]?.attributes?.sub_title}</PageTitle>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {directors?.data?.map(({ id, attributes }) => (
          <DirectorCard
            key={id}
            id={id}
            locale={locale}
            position={attributes.position}
            imageUrl={mediaUrl(attributes.photo?.data?.attributes?.url)}
            full_name={attributes.full_name}
            reception_schedule={attributes.reception_schedule}
            number={attributes.number}
          />
        ))}
      </div>
    </section>
  );
}

const DirectorCard = ({
  id,
  locale,
  position,
  full_name,
  reception_schedule,
  number,
  imageUrl,
}) => {
  const t = useTranslations();

  return (
    <article className="group relative flex flex-col border border-secondary bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-[4/3] bg-secondary">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={full_name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        )}
      </div>
      <div className="flex flex-col grow p-5">
        <h2 className="text-xl text-prime font-bold leading-snug">{full_name}</h2>
        <div className="mt-1 text-def_black/75">{position}</div>
        {(number || reception_schedule) && (
          <dl className="mt-4 grid gap-2 text-sm">
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
        <Link
          href={`/${locale}/about/management/${id}`}
          className="mt-auto pt-5 inline-flex items-center gap-2 text-accent font-semibold text-sm after:absolute after:inset-0 group-hover:gap-3 transition-all"
        >
          {t("biography_button")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};
