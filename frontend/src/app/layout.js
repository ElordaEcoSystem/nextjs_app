import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Elorda Eco System",
  description:
    "«Elorda ecosystem» шжқ мкк. Астана қаласында және қала маңындағы елді мекендерді күтіп ұстаумен, жөндеумен және реконструкциялаумен, қауіпсіздікті қамтамасыз етумен айналысатын нөсер кәрізінің коллекторлары мен құрылыстары үшін бірыңғай пайдалану ұйымы. Ұйым туралы Баспасөз орталығы.",
};

export default function RootLayout({ children, params }) {
  // Получаем локаль из параметров
  const locale = params.locale;

  // Устанавливаем локаль на сервере
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <div >{children}</div>
      </body>
    </html>
  );
}
