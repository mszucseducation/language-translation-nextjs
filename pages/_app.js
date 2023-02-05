import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import ar from "../i18n/ar.json";
import en from "../i18n/en.json";
import fr from "../i18n/fr.json";
import nl_NL from "../i18n/nl-NL.json";

import "../styles/globals.css";

const messages = {
  ar,
  en,
  fr,
  "nl-NL": nl_NL,
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}

export default MyApp;