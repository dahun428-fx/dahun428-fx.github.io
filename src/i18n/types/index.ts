export type Translation = {
  [i18nKey: string]: string | Translation;
};

export type Resource = {
  translation: Translation;
};

export type Resources = {
  [language: string]: Resource;
};
