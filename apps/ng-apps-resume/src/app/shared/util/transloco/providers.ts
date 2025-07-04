import {EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import {
    provideTransloco,
    provideTranslocoConfig,
    provideTranslocoLoadingTpl,
    provideTranslocoMissingHandler,
    TranslocoConfig,
} from '@jsverse/transloco';
import {provideTranslocoLocale} from '@jsverse/transloco-locale';
import {MessageformatConfig} from '@jsverse/transloco-messageformat';
import {provideTranslocoPersistLang} from '@jsverse/transloco-persist-lang';
import {Locale} from './locale';
import {createPersistLangConfig, createTranslocoConfigWithDefault} from './transloco-config-factory';
import {TranslocoErrorOnMissingHandler} from './transloco-error-on-missing-handler.service';

type i18nWithTranslocoOptions = {
    supportedLocales?: Locale[];
    defaultLocale?: Locale;
    fallbackLocale?: Locale;
    loadingTemplate?: string;
    overridingTranslocoConfig?: TranslocoConfig;
    overridingMessageformatConfig?: MessageformatConfig;
};

export function provideI18nUsingTransloco(options?: i18nWithTranslocoOptions): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideTransloco({config: {}}),
        provideTranslocoMissingHandler(TranslocoErrorOnMissingHandler),
        provideTranslocoLoadingTpl(options?.loadingTemplate ?? '…'),
        provideTranslocoLocale(),
        provideTranslocoConfig(
            createTranslocoConfigWithDefault(
                options?.supportedLocales ?? ['en-US'],
                options?.defaultLocale ?? 'en-US',
                options?.fallbackLocale ?? 'en-US',
                options?.overridingTranslocoConfig,
            ),
        ),
        // provideTranslocoMessageformat(
        //     createMessageformatConfigWithDefault(
        //         options?.supportedLocales ?? ['en-US'],
        //         options?.overridingMessageformatConfig,
        //     ),
        // ),
        provideTranslocoPersistLang(createPersistLangConfig()),
    ]);
}
