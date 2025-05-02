import { getTranslations } from 'next-intl/server';
import { Header } from './Header';

export default async function HeaderWrapper({locale}) {
  const t = await getTranslations('header');

  const data = [
    {
      title: t("home"),
      link: "/"
    },
    {
      title: t('about.about'),
      sections: [
        { title: t('about.general'), link: '/about/general' },
        { title: t('about.management'), link: '/about/management' },
        { title: t('about.structure'), link: '/about/structure' },
        { title: t('about.purchases'), link: '/about/purchases' },
      ],
    },
    {
      title: t('services.services'),
      sections: [
        { title: t('services.paid_services'), link: '/services/paid_services' },
        { title: t('services.technical_conditions'), link: '/services/technical_conditions' },
      ],
    },
    {
      title: t("press_center"),
      link: "/press_center"
    },
    {
      title: t("compliance"),
      link: "/compliance"
    },
    {
      title: t("jobs"),
      link: "/jobs"
    }
  ];

  return <Header data={data} locale={locale} />;
  // return <div>test</div>
}