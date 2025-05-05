import { getTranslations } from 'next-intl/server';
import { Header } from './Header';

export default async function HeaderWrapper({locale}) {
  const t = await getTranslations('header');

  const data = [
    {
      title: t("home"),
      link: `/${locale}/`
    },
    {
      title: t('about.about'),
      sections: [
        { title: t('about.general'), link: `/${locale}/about/general` },
        { title: t('about.management'), link: `/${locale}/about/management` },
        { title: t('about.structure'), link: `/${locale}/about/structure` },
        { title: t('about.purchases'), link: `/${locale}/about/purchases` },
      ],
    },
    {
      title: t('services.services'),
      sections: [
        { title: t('services.paid_services'), link: `/${locale}/services/paid_services` },
        { title: t('services.technical_conditions'), link: `/${locale}/services/technical_conditions` },
      ],
    },
    {
      title: t("press_center"),
      link: `/${locale}/press_center`
    },
    {
      title: t("compliance"),
      link: `/${locale}/compliance`
    },
    {
      title: t("jobs"),
      link: `/${locale}/jobs`
    }
  ];

  return <Header data={data} locale={locale} />;
  // return <div>test</div>
}