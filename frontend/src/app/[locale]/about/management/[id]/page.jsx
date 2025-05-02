function distributorOfId(id, locale) {
  let res = Number(id);
  if (locale === "ru" && res % 2 === 1) {
    res += 1;
  } else if (locale === "kk" && res % 2 === 0) {
    res -= 1;
  }
  return res;
}
import { fetchDirectorById } from "@/app/[locale]/needed/services";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default async function BiographyWrapper({ params }) {
  const { locale, id } = params;
  const data = await fetchDirectorById(locale, distributorOfId(id, locale));
  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  const director = data.data.attributes;

  // console.log("PARAMS", params);
  // console.log("DIRECOT", director);

  return <Biography data={director} domain={domain} />;
}
const Biography = ({ data, domain }) => {
  const t = useTranslations();
  console.log("BIOGRAPHY", data);

  const {
    position,
    full_name,
    reception_schedule,
    number,
    photo: {
      data: {
        attributes: { url },
      },
    },
  } = data;
  const imageUrl = domain + url;

  return (
    <section className="container py-12 flex flex-col gap-4 min-h-screen">
      <div className="grid sm:grid-cols-[300px_1fr] grid-cols-1 h-full">
        <div className="p-5 flex gap-4 border-gray-200 flex-col border-b-2 sm:border-b-0 sm:border-r-2 w-full h-full flex-1">
          <div className="relative w-full aspect-square flex-shrink-0">
            <Image
              src={imageUrl}
              alt="Фото сотрудника"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
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
          {data.biography.map((text) => {
            {
              console.log(text.children[0].bold);
            }
            return (
              <div
                className={`${
                  text.children[0].bold ? "text-xl font-bold" : ""
                } mt-2`}
              >
                {text.children[0].text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
