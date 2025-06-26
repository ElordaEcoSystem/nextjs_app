import { useLocale } from "next-intl";
import { fetchPaidTable } from "../../needed/services";
import Link from "next/link";

export default async function PaidServices() {
  const locale = useLocale();
  const data = await fetchPaidTable(locale);
  const domain = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  const services = [
    {
      category: {
        ru: 'Очистка, промывка, пропарка сетей ливневой канализации',
        kk: 'Нөсерлі кәріз желілерін тазалау, жуу, булау'
      },
      items: [
        { id: 1, equipment: { ru: 'Илососная машина КО-507', kk: 'Илосос машинасы КО-507' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 32657, withVat: 36576 }, winter: { noVat: 35596, withVat: 39867 } },
        { id: 2, equipment: { ru: 'Каналопромывочная машина КО-512', kk: 'Арнаны жуу машинасы КО-512' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 52582, withVat: 58892 }, winter: { noVat: 55521, withVat: 62183 } },
        { id: 3, equipment: { ru: 'Каналопромывочная машина Camel 1200, VOLVO FM 84 F R', kk: 'Арнаны жуу машинасы Camel 1200, VOLVO FM 84 F R' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 100255, withVat: 112286 }, winter: { noVat: 111226, withVat: 124574 } },
        { id: 4, equipment: { ru: 'Вакуумно-каналопромывочная машина VOLVO FM 84F R', kk: 'VOLVO FM 84F R вакуумды каналды жуу машинасы' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 126506, withVat: 141687 }, winter: { noVat: 152579, withVat: 170889 } },
        { id: 24, equipment: { ru: 'Паровая машина ППУА 1600', kk: 'Бу машина ППУА 1600' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 69065, withVat: 77353 }, winter: { noVat: 81760, withVat: 91572 } },
      ]
    },
    {
      category: {
        ru: 'Откачка, перекачка грунтовых, дождевых, талых и бытовых стоков / Откачка септиков',
        kk: 'Топырақ, жаңбыр, еріген және тұрмыстық ағындарды суларды айдау, сорғу / Септиктерді сорғу'
      },
      items: [
        { id: 5, equipment: { ru: 'Вакуумная машина КО-505', kk: 'Вакуумдық машина КО-505' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 23533, withVat: 26357 }, winter: { noVat: 28392, withVat: 31799 } },
        { id: 6, equipment: { ru: 'Мотопомпа SP-100 производительностью 80-100 м3/ч', kk: 'Мотопомпа SP-100 өнімділігі 80-100 м3/сағ' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 13466, withVat: 15081 }, winter: { noVat: 13466, withVat: 15081 } },
        { id: 7, equipment: { ru: 'Мотопомпа SP-100 производительностью 80-100 м3/ч (без учета ДТ)', kk: 'Мотопомпа SP-100 өнімділігі 80-100 м3/сағ (ДО есепке алынбайды)' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 11681, withVat: 13082 }, winter: { noVat: 11681, withVat: 13082 } },
        { id: 8, equipment: { ru: 'Насос центробежный производительностью 300 м3/час', kk: 'Ортатепкiш сорғы, өнімділігі 300 м3/сағ' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 16679, withVat: 18680 }, winter: { noVat: 18077, withVat: 20246 } },
        { id: 9, equipment: { ru: 'Насос центробежный производительностью 300 м3/час (без учета ДТ)', kk: 'Ортатепкiш сорғы, өнімділігі 300 м3/сағ (ДО есепке алынбайды)' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 12909, withVat: 14458 }, winter: { noVat: 12909, withVat: 14458 } },
        { id: 10, equipment: { ru: 'Насос центробежный производительностью 625 м3/час', kk: 'Ортатепкiш сорғы, өнімділігі 625 м3/сағ' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 29537, withVat: 33082 }, winter: { noVat: 34096, withVat: 38188 } },
        { id: 11, equipment: { ru: 'Насос центробежный производительностью 625 м3/час (без учета ДТ)', kk: 'Ортатепкiш сорғы, өнімділігі 625 м3/сағ (ДО есепке алынбайды)' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 15648, withVat: 17526 }, winter: { noVat: 15648, withVat: 17526 } },
        { id: 25, equipment: { ru: 'Дифференцированный тариф на откачку септика для физических лиц', kk: 'Жеке тұлғалар үшін септикті айдауға арналған сараланған тариф' }, unit: { ru: '1 м3', kk: '1 м3' }, summer: { noVat: "", withVat: 1439 }, winter: { noVat: "", withVat: 1733 } },
        { id: 26, equipment: { ru: 'Дифференцированный тариф на откачку септика для юридических лиц', kk: 'Заңды тұлғалар үшін септикті айдауға арналған сараланған тариф' }, unit: { ru: '1 м3', kk: '1 м3' }, summer: { noVat: "", withVat: 1871 }, winter: { noVat: "", withVat: 2245 } }

      ]
    },
    {
      category: {
        ru: 'Диагностика сетей ливневой канализации',
        kk: 'Нөсерлі кәріз желілерін диагностикалау'
      },
      items: [
        { id: 12, equipment: { ru: 'Обследование трубопровода при помощи телеинспекционного комплекса', kk: 'Телеинспекциялық кешеннің көмегімен құбырды тексеру' },unit: { ru: '1 м.п.', kk: '1 қ.м.' }, summer: { noVat: 1429, withVat: 1600 }, winter: { noVat: 1429, withVat: 1600 } },
      ]
    },
    {
      category: {
        "ru": "Строительно-монтажные работы по прокладке сетей ливневой канализации",
        "kk": "Нөсер кәріз желілерін төсеу бойынша құрылыс-монтаж жұмыстары"
      },
      items: [
        {
          "id": 27,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=160mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=160mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 17069 },
          "winter": { "noVat": "", "withVat": 17069 }
        },
        {
          "id": 28,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=200mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=200mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 22758 },
          "winter": { "noVat": "", "withVat": 22758 }
        },
        {
          "id": 29,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=315mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=315mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 35258 },
          "winter": { "noVat": "", "withVat": 35258 }
        },
        {
          "id": 30,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=400mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=400mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 48505 },
          "winter": { "noVat": "", "withVat": 48505 }
        },
        {
          "id": 31,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=500mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=500mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 56250 },
          "winter": { "noVat": "", "withVat": 56250 }
        },
        {
          "id": 32,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=600mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=600mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 62500 },
          "winter": { "noVat": "", "withVat": 62500 }
        },
        {
          "id": 33,
          "equipment": {
            "ru": "ГНБ с применением установки XCMG XZ-230 d=700mm, без учета стоимости материалов",
            "kk": "XCMG XZ-230 d=700mm қондырғысымен ГНБ, материалдардың құнын есепке алмағанда"
          },
          "unit": { "ru": "1 п.м.", "kk": "1 қ.м." },
          "summer": { "noVat": "", "withVat": 72860 },
          "winter": { "noVat": "", "withVat": 72860 }
        },
        {
          "id": 34,
          "equipment": {
            "ru": "Устранение неисправностей путем стыковой сварки SDR трубы d=180mm, 200mm, 225mm",
            "kk": "SDR құбырларын (d=180мм, 200мм, 225мм) түйістіріп дәнекерлеу арқылы ақауларды жою"
          },
          "unit": { "ru": "1 стык", "kk": "1 түйіс" },
          "summer": { "noVat": 17623, "withVat": 19738 },
          "winter": { "noVat": "", "withVat": "" }
        },
        {
          "id": 35,
          "equipment": {
            "ru": "Устранение неисправностей путем стыковой сварки SDR трубы d=250mm, 280mm",
            "kk": "SDR құбырларын (d=250мм, 280мм) түйістіріп дәнекерлеу арқылы ақауларды жою"
          },
          "unit": { "ru": "1 стык", "kk": "1 түйіс" },
          "summer": { "noVat": 21147, "withVat": 23685 },
          "winter": { "noVat": "", "withVat": "" }
        },
        {
          "id": 36,
          "equipment": {
            "ru": "Устранение неисправностей путем стыковой сварки SDR трубы d=315mm, 355mm",
            "kk": "SDR құбырларын (d=315мм, 355мм) түйістіріп дәнекерлеу арқылы ақауларды жою"
          },
          "unit": { "ru": "1 стык", "kk": "1 түйіс" },
          "summer": { "noVat": 28197, "withVat": 31580 },
          "winter": { "noVat": "", "withVat": "" }
        },
        {
          "id": 37,
          "equipment": {
            "ru": "Устранение неисправностей путем стыковой сварки SDR трубы d=400mm, 450mm",
            "kk": "SDR құбырларын (d=400мм, 450мм) түйістіріп дәнекерлеу арқылы ақауларды жою"
          },
          "unit": { "ru": "1 стык", "kk": "1 түйіс" },
          "summer": { "noVat": 35246, "withVat": 39475 },
          "winter": { "noVat": "", "withVat": "" }
        }
      ]
    },
    {
      category: {
        ru: 'Санитарная очистка и уборка улиц',
        kk: 'Көшелерді санитарлық тазалау және тазалау'
      },
      items: [
        { id: 13, equipment: { ru: 'Машина уборочная Беларусь на базе МТЗ 82,1', kk: 'МТЗ 82,1 негізінде Беларусь жинау машинасы' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 12931, withVat: 14482 }, winter: { noVat: 15791, withVat: 17686 } },
        { id: 14, equipment: { ru: 'Машина коммунальная МПУУ-1', kk: 'Коммуналдық МПУУ-1 машинасы' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 12931, withVat: 14482 }, winter: { noVat: 15791, withVat: 17686 } },
      ]
    },
    {
      category: {
        ru: 'Вывоз снега',
        kk: 'Қар шығару'
      },
      items: [
        { id: 15, equipment: { ru: 'Самосвал 14-15т.', kk: 'Самосвал 14-15т.' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 16003, withVat: 17924 }, winter: { noVat: 19216, withVat: 21522 } },
        { id: 16, equipment: { ru: 'Самосвал 20т.', kk: 'Самосвал 20т.' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 24288, withVat: 27202 }, winter: { noVat: 28402, withVat: 31810 } },
      ]
    },
    {
      category: {
        ru: 'Земляные работы',
        kk: 'Жер жұмыстары'
      },
      items: [
        { id: 17, equipment: { ru: 'Экскаватор TLB-825', kk: 'Экскаватор TLB-825' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 18196, withVat: 20379 }, winter: { noVat: 21997, withVat: 24636 } },
        { id: 18, equipment: { ru: 'Экскаватор HT135W6 HTL120-9', kk: 'Экскаватор HT135W6 HTL120-9' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 25282, withVat: 28316 }, winter: { noVat: 31160, withVat: 34899 } },
      ]
    },
    {
      category: {
        ru: 'Другая спецтехника',
        kk: 'Басқа мамандырылған техника'
      },
      items: [
        { id: 19, equipment: { ru: 'Автокран грузоподъёмностью 25 тонн на базе КамАЗ', kk: 'Автокран КамАЗ негізінде, жүк көтергіштігі 25 тонна' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 43234, withVat: 48423 }, winter: { noVat: 49661, withVat: 55620 } },
        { id: 20, equipment: { ru: 'Манипулятор на базе КамАЗ', kk: 'Манипулятор КамАЗ негізінде' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 39852, withVat: 44634 }, winter: { noVat: 43770, withVat: 49023 } },
        { id: 21, equipment: { ru: 'Автобус', kk: 'Автобус' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 25231, withVat: 28258 }, winter: { noVat: 31108, withVat: 34841 } },
        { id: 22, equipment: { ru: 'Микроавтобус', kk: 'Микроавтобус' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 20958, withVat: 23473 }, winter: { noVat: 26836, withVat: 30056 } },
        { id: 23, equipment: { ru: 'Авто-ремонтная мастерская', kk: 'Авто-жөндеу шеберханасы' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 26809, withVat: 30026 }, winter: { noVat: 32687, withVat: 36609 } },
        { id: 38, equipment: { ru: 'Комбинированная дорожная машина на базе Камаз 43253-2010-69 (КДМ)', kk: 'Камаз 43253-2010-69 (КДМ)базасындағы аралас жол машинасы' }, unit: { ru: 'маш/час', kk: 'маш/сағ' }, summer: { noVat: 35534, withVat: 39798 }, winter: { noVat: 47568, withVat: 53276 } },
        
      ]
    }
  ];

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

  const t = translations[locale] || translations.ru; // Fallback to Russian if locale is invalid
  // console.log("PAY",data.data[0].attributes?.document.lenght )
  const text = data?.data[0].attributes.content
  return (
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-def_black mb-4">
            {t.title}
        </h2>
        <div  className="mb-4">
            {text?.map((item)=> {return (
                <div className="mt-2">{item.children[0].text}</div>
            )})}
        </div>
       {data?.data[0].attributes?.document.length > 0 &&
         <div className="mb-8">
         <div className="">
           <div className="text-xl font-medium">{t.doc}</div>
         </div>
         {data.data[0].attributes?.document.map((item) => {
           return (
             <Link
               className="hover:text-prime underline hover:bg-secondary transition-all table mt-2"
               href={domain + item?.item_document?.data?.attributes?.url}
             >
               {item?.title}
             </Link>
           );
         })}
       </div>
       }
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
                      <td className="py-2 px-4 border-b border-r text-right">{item.summer.noVat.toLocaleString()}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{item.summer.withVat.toLocaleString()}</td>
                      <td className="py-2 px-4 border-b border-r text-right">{item.winter.noVat.toLocaleString()}</td>
                      <td className="py-2 px-4 border-b text-right">{item.winter.withVat.toLocaleString()}</td>
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

