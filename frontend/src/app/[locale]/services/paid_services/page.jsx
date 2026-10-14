import { getTranslations } from "next-intl/server";
import { Phone } from "lucide-react";
import { fetchPaidTable, fetchPriceList } from "../../needed/services";
import { staticPageMetadata } from "../../needed/seo";
import { PHONES } from "../../needed/contacts";
import { RichText } from "@/components/RichText";
import { PageTitle } from "@/components/PageTitle";
import { DocumentList } from "@/components/DocumentList";

import { BUTTON } from "@/components/ui";
export const generateMetadata = staticPageMetadata("/services/paid_services", "header.services.paid_services");

const formatPrice = (value) =>
  value === "" || value == null ? "—" : Number(value).toLocaleString("ru-RU");

const translations = {
  ru: {
    equipmentHeader: "Специализированная техника, механизм",
    unitHeader: "Ед. изм.",
    summerHeader: "Летний период",
    winterHeader: "Зимний период",
    noVat: "Без НДС",
    withVat: "С НДС",
    doc: "Документы",
  },
  kk: {
    equipmentHeader: "Мамандырылған техника, механизм",
    unitHeader: "Өлшем бірлігі",
    summerHeader: "Жазғы маусым",
    winterHeader: "Қысқы маусым",
    noVat: "ҚҚС жоқ",
    withVat: "ҚҚС-пен",
    doc: "Құжаттар",
  },
};

export default async function PaidServices({ params: { locale } }) {
  const [data, priceList, tUi] = await Promise.all([
    fetchPaidTable(locale),
    fetchPriceList(),
    getTranslations({ locale, namespace: "ui" }),
  ]);
  const entry = data?.data?.[0]?.attributes;
  const prices = priceList?.data?.attributes;
  // Поля прайс-листа в Strapi хранятся парами: title_kk / title_ru и т.д.
  const tr = (obj, field) => obj?.[`${field}_${locale}`] || obj?.[`${field}_ru`];
  const t = translations[locale] || translations.ru;

  return (
    <div className="container py-10">
      <PageTitle>{tr(prices, "title")}</PageTitle>
      <div className="max-w-3xl">
        <RichText content={entry?.content} className="text-base leading-relaxed flex flex-col gap-1" />
        <DocumentList documents={entry?.document} title={t.doc} />
      </div>

      <div className="mt-12 flex flex-col gap-10">
        {prices?.categories?.map((category) => (
          <section key={category.id}>
            <h2 className="text-lg md:text-xl font-bold text-white bg-prime px-4 py-3 md:text-center">
              {tr(category, "title")}
            </h2>

            {/* Таблица — на планшетах и компьютерах */}
            <div className="hidden md:block overflow-x-auto border border-t-0 border-secondary">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-secondary/60 text-prime">
                  <tr>
                    <th className="py-2 px-3 text-left font-semibold" rowSpan="2">№</th>
                    <th className="py-2 px-3 text-left font-semibold" rowSpan="2">{t.equipmentHeader}</th>
                    <th className="py-2 px-3 text-left font-semibold" rowSpan="2">{t.unitHeader}</th>
                    <th className="py-2 px-3 text-center font-semibold border-l border-secondary" colSpan="2">{t.summerHeader}</th>
                    <th className="py-2 px-3 text-center font-semibold border-l border-secondary" colSpan="2">{t.winterHeader}</th>
                  </tr>
                  <tr className="text-xs">
                    <th className="pb-2 px-3 text-right font-medium border-l border-secondary">{t.noVat}</th>
                    <th className="pb-2 px-3 text-right font-medium">{t.withVat}</th>
                    <th className="pb-2 px-3 text-right font-medium border-l border-secondary">{t.noVat}</th>
                    <th className="pb-2 px-3 text-right font-medium">{t.withVat}</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items?.map((item, index) => (
                    <tr key={item.id} className="border-t border-secondary hover:bg-secondary/30">
                      <td className="py-3 px-3 text-muted">{index + 1}</td>
                      <td className="py-3 px-3">{tr(item, "equipment")}</td>
                      <td className="py-3 px-3 whitespace-nowrap text-muted">{tr(item, "unit")}</td>
                      <td className="py-3 px-3 text-right tabular-nums border-l border-secondary">{formatPrice(item.summer_no_vat)}</td>
                      <td className="py-3 px-3 text-right tabular-nums font-semibold text-prime">{formatPrice(item.summer_with_vat)}</td>
                      <td className="py-3 px-3 text-right tabular-nums border-l border-secondary">{formatPrice(item.winter_no_vat)}</td>
                      <td className="py-3 px-3 text-right tabular-nums font-semibold text-prime">{formatPrice(item.winter_with_vat)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Карточки — на телефонах */}
            <ul className="md:hidden border border-t-0 border-secondary divide-y divide-secondary bg-white">
              {category.items?.map((item) => (
                <li key={item.id} className="p-4">
                  <div className="font-medium text-def_black">{tr(item, "equipment")}</div>
                  <div className="text-xs text-muted mt-0.5">{tr(item, "unit")}</div>
                  <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    {[
                      [tUi("season_summer"), item.summer_no_vat, item.summer_with_vat],
                      [tUi("season_winter"), item.winter_no_vat, item.winter_with_vat],
                    ].map(([season, noVat, withVat]) => (
                      <div key={season} className="bg-secondary/40 px-3 py-2">
                        <dt className="text-xs text-muted">{season}</dt>
                        <dd className="font-semibold text-prime tabular-nums">
                          {formatPrice(withVat)} <span className="text-xs font-normal text-muted">{tUi("with_vat")}</span>
                        </dd>
                        {noVat !== null && noVat !== "" && noVat !== undefined && (
                          <dd className="text-xs text-muted tabular-nums">
                            {formatPrice(noVat)} {tUi("no_vat")}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {prices && (
        <aside className="mt-12 bg-prime text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="grow">
            <h2 className="text-xl font-bold">{tUi("order_title")}</h2>
            <p className="mt-1 text-white/80">{tUi("order_text")}</p>
          </div>
          <a
            href={`tel:${PHONES.reception.tel}`}
            className={`${BUTTON.light} self-start md:self-auto`}
          >
            <Phone className="h-5 w-5" />
            {PHONES.reception.display}
          </a>
        </aside>
      )}
    </div>
  );
}
