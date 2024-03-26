import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "@/i18n/resources";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: "v3",
      resources: {
        ko: {
          translation: {
            ...resources.ko.translation,
          },
        },
      },
      lng: "ko",
      fallbackLng: "ko",
      interpolation: {
        escapeValue: false,
      },
    })
    .then();
}
