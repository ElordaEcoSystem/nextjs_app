// import { Roboto } from "next/font/google";
// import "./globals.css";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { fetchNav } from "./needed/services";

// const roboto = Roboto({
//   subsets: ["latin", "cyrillic"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

// export const metadata = {
//   title: "Elorda Eco System",
//   description:
//     "«Elorda ecosystem» шжқ мкк. Астана қаласында және қала маңындағы елді мекендерді күтіп ұстаумен, жөндеумен және реконструкциялаумен, қауіпсіздікті қамтамасыз етумен айналысатын нөсер кәрізінің коллекторлары мен құрылыстары үшін бірыңғай пайдалану ұйымы. Ұйым туралы Баспасөз орталығы.",
//   metadataBase: new URL("http://new.elordaecosystem.kz/kk"),
//   keywords: [
//     "Elorda",
//     "ElordaEco",
//     "ElordaEcoSystem",
//     "ГКП на ПХВ ElordaEcoSystem",
//     "Комунальное Преприятия",
//     "Ливневая канализация",
//     "Ливневая канализация города Астана",
//   ],
// };
// export default async function RootLayout({ children, params: { locale } }) {
//   //

//   const data = await fetchNav(locale);
//   console.log("LOCALE", locale);

//   return (
//     <html lang={locale}>
//       <body
//         className={`${roboto.className} flex flex-col min-h-screen relative`}
//       >
//         <Header data={data} locale={locale} />
//         <main className="grow mt-16">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Roboto } from "next/font/google";
import "./globals.css";
// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fetchNav } from "./needed/services";
import HeaderWrapper from "@/components/HeaderWrapper";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default async function LocaleLayout({ children, params: { locale } }) {

  console.log("LOCALE", locale);

  return (
    <>
      <HeaderWrapper  locale={locale} />
      <main className={`${roboto.className} grow  min-h-screen`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
