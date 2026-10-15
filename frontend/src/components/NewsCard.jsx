import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { mediaUrl } from "@/app/[locale]/needed/services";
import { blocksToPlainText, formatDate } from "@/app/[locale]/needed/format";

function thumbnailUrl(post, format) {
  const thumbnail = post.attributes.thumbnail?.data?.attributes;
  return mediaUrl(thumbnail?.formats?.[format]?.url ?? thumbnail?.url);
}

// Карточка новости. variant: "card" — вертикальная, "compact" — горизонтальная (картинка слева)
export const NewsCard = ({ post, locale, variant = "card", featured = false }) => {
  const { title, date_of_publication, description_rich_text } = post.attributes;
  const href = `/${locale}/press_center/${post.id}`;
  const compact = variant === "compact";
  const image = thumbnailUrl(post, featured ? "large" : compact ? "small" : "medium");
  const excerpt = blocksToPlainText(description_rich_text);

  return (
    <article
      className={clsx(
        "group relative bg-white border border-secondary overflow-hidden hover:shadow-lg hover:border-sky/40 transition-all",
        compact ? "grid grid-cols-[132px_1fr] sm:grid-cols-[200px_1fr] lg:grid-cols-[232px_1fr] h-full" : "flex flex-col h-full"
      )}
    >
      <div className={clsx("relative overflow-hidden", image ? "bg-secondary" : "bg-secondary/40", compact ? "h-full min-h-[96px]" : "aspect-[4/3]")}>
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes={featured ? "(min-width: 768px) 50vw, 100vw" : compact ? "232px" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          // Заглушка, если у поста нет обложки: логотип предприятия по центру
          <Image
            src="/image/logo.png"
            alt=""
            fill
            sizes={compact ? "232px" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className={clsx("object-contain", compact ? "p-4" : "p-10")}
          />
        )}
      </div>
      <div className={clsx("flex flex-col", compact ? "p-3 sm:p-4 justify-center" : "p-5 grow")}>
        <time dateTime={date_of_publication} className="text-caption font-medium uppercase text-accent">
          {formatDate(date_of_publication, locale)}
        </time>
        <h3
          className={clsx(
            "mt-2 font-bold text-prime",
            featured ? "text-h3 md:text-h2-sm line-clamp-3" : compact ? "text-sm sm:text-h4 leading-snug tracking-[-0.005em] line-clamp-3" : "text-h4 line-clamp-3"
          )}
        >
          {/* Ссылка растянута на всю карточку */}
          <Link href={href} className="after:absolute after:inset-0 group-hover:text-accent transition-colors">
            {title}
          </Link>
        </h3>
        {!compact && excerpt && (
          <p className={clsx("mt-2.5 text-sm text-def_black/70 leading-normal", featured ? "line-clamp-3" : "line-clamp-3")}>
            {excerpt}
          </p>
        )}
      </div>
    </article>
  );
};
