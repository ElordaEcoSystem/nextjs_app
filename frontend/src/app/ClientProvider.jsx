'use client';

import { NextIntlClientProvider } from 'next-intl';

const ClientProvider = ({ locale, messages, children }) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default ClientProvider;
