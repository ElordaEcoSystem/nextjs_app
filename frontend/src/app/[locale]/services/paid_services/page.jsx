import Link from "next/link";
import { fetchPaidTable, fetchPriceList, mediaUrl } from "../../needed/services";
import { staticPageMetadata } from "../../needed/seo";
import { RichText } from "@/components/RichText";

import { PageTitle } from "@/components/PageTitle";

export const generateMetadata = staticPageMetadata("/services/paid_services", "header.services.paid_services");

const formatPrice = (value) =>
  value === "" || value == null ? "" : Number(value).toLocaleString("ru-RU");

export default async function PaidServices({ params: { locale } }) {
  const [data, priceList] = await Promise.all([
    fetchPaidTable(locale),
    fetchPriceList(),
  ]);
  const entry = data?.data?.[0]?.attributes;
  const prices = priceList?.data?.attributes;
  // Поля прайс-листа в Strapi хранятся парами: title_kk / title_ru и т.д.
  const tr = (obj, field) => obj?.[`${field}_${locale}`] || obj?.[`${field}_ru`];

  const translations = {
    ru: {
      equipmentHeader: 'Специализированная техника, механизм',
      unitHeader: 'Ед.изм.',
      summerHeader: 'Летний период',
      winterHeader: 'Зимний период',
      noVat: 'Без НДС',
      withVat: 'С НДС',
      site: 'Сайт',
      phone: 'Телефон',
      doc: 'Документы'
    },
    kk: {
      equipmentHeader: 'Мамандырылған техника, механизм',
      unitHeader: 'Өлшем бірлігі',
      summerHeader: 'Жазғы маусым',
      winterHeader: 'Қысқы маусым',
      noVat: 'ҚҚС жоқ',
      withVat: 'ҚҚС-пен',
      site: 'Сайт',
      phone: 'Телефон',
      doc: 'Құжаттар'
    }
  };

  const t = translations[locale] || translations.ru;

  return (
      <div className="container mx-auto py-8">
        <PageTitle>{tr(prices, "title")}</PageTitle>
        <RichText content={entry?.content} className="mb-4 flex flex-col gap-1" />
        {entry?.document?.length > 0 && (
          <div className="mb-8">
            <div className="text-xl font-medium">{t.doc}</div>
            {entry.document.map((item, index) => {
              const href = mediaUrl(item?.item_document?.data?.attributes?.url);
              if (!href) return null;
              return (
                <Link
                  key={index}
                  className="hover:text-prime underline hover:bg-secondary transition-all table mt-2"
                  href={href}
                  download
                >
                  {item?.title}
                </Link>
              );
            })}
          </div>
        )}
        {prices?.categories?.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl text-center bg-prime py-4 text-white font-semibold  border-gray-200 border-r border-l border-t">{tr(category, "title")}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-r text-left" rowSpan="2">№</th>
                    <th className="py-2 px-4 border-b border-r text-left" rowSpan="2">{t.equipmentHeader}</th>
                    <th className="py-2 px-4 border-b border-r text-left" rowSpan="2">{t.unitHeader}</th>
                    <th className="py-2 px-4 border-b text-center" colSpan="2">{t.summerHeader}</th>
                    <th className="py-2 px-4 border-b text-center" colSpan="2">{t.winterHeader}</th>
                  </tr>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-r text-center">{t.noVat}</th>
                    <th className="py-2 px-4 border-b border-r text-center">{t.withVat}</th>
                    <th className="py-2 px-4 border-b border-r text-center">{t.noVat}</th>
                    <th className="py-2 px-4 border-b text-center">{t.withVat}</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items?.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b border-r">{index+1}</td>
                      <td className="py-2 px-4 border-b border-r">{tr(item, "equipment")}</td>
                      <td className="py-2 px-4 border-b border-r">{tr(item, "unit")}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{formatPrice(item.summer_no_vat)}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{formatPrice(item.summer_with_vat)}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{formatPrice(item.winter_no_vat)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatPrice(item.winter_with_vat)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );

}

