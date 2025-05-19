import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Elorda Eco System",
  description:
    "«Elorda ecosystem» шжқ мкк. Астана қаласында және қала маңындағы елді мекендерді күтіп ұстаумен, жөндеумен және реконструкциялаумен, қауіпсіздікті қамтамасыз етумен айналысатын нөсер кәрізінің коллекторлары мен құрылыстары үшін бірыңғай пайдалану ұйымы. Ұйым туралы Баспасөз орталығы.",
  keywords: "Elorda ecosystem, Астана, коммунальные услуги, водоотведение, канализация, экология",
  openGraph: {
    title: 'Elorda Eco System',
    description: '«Elorda ecosystem» шжқ мкк - ведущая компания по обслуживанию коммунальной инфраструктуры в Астане',
    url: 'https://new.elordaecosystem.kz',
    siteName: 'Elorda Eco System',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children, params }) {
  // Получаем локаль из параметров
  const locale = params.locale;

  // Устанавливаем локаль на сервере
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="f1785b354bdbcfee" />
        <link rel="canonical" href="https://new.elordaecosystem.kz" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
