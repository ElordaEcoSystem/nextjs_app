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
        <meta name="yandex-verification" content="1c812703e7ec8525" />
        <meta name="google-site-verification" content="hPJ75BCKHf98HY5tY4CfEQHXD6ZQu0MLIMOpjJe4EJc" />
        <link rel="canonical" href="https://elordaecosystem.kz" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
