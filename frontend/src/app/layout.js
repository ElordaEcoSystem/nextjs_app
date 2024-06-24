export const metadata = {
  title: "Elorda Eco System",
  description:
    "«Elorda ecosystem» шжқ мкк. Астана қаласында және қала маңындағы елді мекендерді күтіп ұстаумен, жөндеумен және реконструкциялаумен, қауіпсіздікті қамтамасыз етумен айналысатын нөсер кәрізінің коллекторлары мен құрылыстары үшін бірыңғай пайдалану ұйымы. Ұйым туралы Баспасөз орталығы.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
