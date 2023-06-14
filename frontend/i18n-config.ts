export const i18n = {
    defaultLocale: 'en',
    locales: ['en'], // todo: add others and use some automatic translation service
} as const;

export type Locale = typeof i18n['locales'][number];
