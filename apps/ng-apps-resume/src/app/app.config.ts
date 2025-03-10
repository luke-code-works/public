import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideMaterialSymbols} from './util/material-symbols/provider';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(
            appRoutes,
            withInMemoryScrolling({anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}),
        ),
        provideMaterialSymbols(),
    ],
};
