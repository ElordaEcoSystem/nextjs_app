import Link from "next/link";
import { fetchPaidTable, mediaUrl } from "../../needed/services";
import { staticPageMetadata } from "../../needed/seo";
import { RichText } from "@/components/RichText";
import { PRICE_LIST } from "./prices";

export const generateMetadata = staticPageMetadata("/services/paid_services", "header.services.paid_services");

const formatPrice = (value) => (value === "" || value == null ? "" : value.toLocaleString("ru-RU"));

export default async function PaidServices({ params: { locale } }) {
  const data = await fetchPaidTable(locale);
  const entry = data?.data?.[0]?.attributes;
  const services = PRICE_LIST;

  const translations = {
    ru: {
      title: 'Прайс-лист на 2025 год',
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
      title: '2025 жылға арналған прайс-парақ',
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
        <h2 className="text-3xl font-bold text-def_black mb-4">
            {t.title}
        </h2>
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
        {services.map((service, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl text-center bg-prime py-4 text-white font-semibold  border-gray-200 border-r border-l border-t">{service.category[locale]}</h2>
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
                  {service.items.map((item,index) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b border-r">{index+1}</td>
                      <td className="py-2 px-4 border-b border-r">{item.equipment[locale]}</td>
                      <td className="py-2 px-4 border-b border-r">{item.unit[locale]}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{formatPrice(item.summer.noVat)}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{formatPrice(item.summer.withVat)}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{formatPrice(item.winter.noVat)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatPrice(item.winter.withVat)}</td>
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

