/**
 * Locales using BCP 47 language tags.
 * Keys follow the pattern <language>_<REGION>.
 */
export const LOCALES = ['en-US', 'de-DE'] as const;

export type Locale = (typeof LOCALES)[number];
