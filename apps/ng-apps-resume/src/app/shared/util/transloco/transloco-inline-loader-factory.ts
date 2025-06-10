import {InlineLoader, Translation} from '@jsverse/transloco';
import {Locale} from './locale';

/**
 * Allows lazy inline loading for transloco,
 * e.g. like (locale: Locale) => import(`../i18n/${locale}.json`)
 */
export type translocoInlineLoaderFunction = (locale: Locale) => Promise<Translation>;

/**
 * Creates transloco inlineloader using the given lazy inline loader function and locales
 */
export function createTranslocoInlineLoader(loaderFn: translocoInlineLoaderFunction, locales: Locale[]): InlineLoader {
    return locales.reduce((inlineLoader: InlineLoader, locale: Locale) => {
        inlineLoader[locale] = () => loaderFn(locale);
        return inlineLoader;
    }, {});
}
