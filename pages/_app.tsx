import type { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { TolgeeProvider } from '@tolgee/react';
import { TreeTranslationsData } from '@tolgee/core';
import ui from '@tolgee/ui'

import '../styles/globals.css';

const MyApp = ({ Component, pageProps, locales }: AppProps & { locales: { [key: string]: TreeTranslationsData } }) => {
  const { locale: activeLocale } = useRouter();

  return (
    <TolgeeProvider
      forceLanguage={activeLocale}
      apiKey={process.env.NEXT_PUBLIC_TOLGEE_API_KEY}
      apiUrl={process.env.NEXT_PUBLIC_TOLGEE_API_URL}
      filesUrlPrefix={'i18n/'}
      ui={process.env.NEXT_PUBLIC_TOLGEE_API_KEY ? ui : undefined}
      staticData={{
        en: () => import('../i18n/en.json'),
        fr: () => import('../i18n/fr.json'),
        ...locales,
      }}
    >
      <Component {...pageProps} />
    </TolgeeProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (context: AppContext) => {
  const locale = context.router.locale;

  const result = {
    locales: {
      [locale as string]: await import(`../i18n/${locale}.json`),
    },
  };

  return result;
};
