import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideDefaultXorCipherDefaultKey} from './ui/xor-cipher/provider';
import {provideMaterialSymbols} from './util/material-symbols/provider';
import {provideI18nUsingTransloco} from './util/transloco/providers';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(
            appRoutes,
            withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}),
        ),
        provideMaterialSymbols(),
        provideDefaultXorCipherDefaultKey(
            (() => {
                const part1 = atob('c3VwZXItZHVwZXI=');
                const part2 = String.fromCharCode(45);
                const part3 = [...'agem-agig'].reverse().join('');
                const part4 = String.fromCharCode(45);
                const part5 = 'key';

                return part1 + part2 + part3 + part4 + part5;
            })(),
        ),
        provideI18nUsingTransloco({
            supportedLocales: ['en-US', 'de-DE'],
            defaultLocale: 'en-US',
            fallbackLocale: 'en-US',
        }),
    ],
};
