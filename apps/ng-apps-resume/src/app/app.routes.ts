import {Route} from '@angular/router';
import {provideTranslocoScope} from '@jsverse/transloco';
import {Locale} from '@jsverse/transloco-locale';
import {createTranslocoInlineLoader} from './util/transloco/transloco-inline-loader-factory';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
    },
    {
        path: 'profile',
        loadComponent: () => import('./ui/profile/profile.component').then((x) => x.ProfileComponent),
    },
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./ui/privacy-policy/privacy-policy.component').then((x) => x.PrivacyPolicyComponent),
        providers: [
            provideTranslocoScope({
                scope: 'privacyPolicy',
                loader: createTranslocoInlineLoader(
                    (locale: Locale) => import(`../i18n/privacy-policy/${locale}.json`),
                    ['de-DE'],
                ),
            }),
        ],
    },
    {
        path: 'legal-notice',
        loadComponent: () => import('./ui/legal-notice/legal-notice.component').then((x) => x.LegalNoticeComponent),
        providers: [
            provideTranslocoScope({
                scope: 'legalNotice',
                loader: createTranslocoInlineLoader(
                    (locale: Locale) => import(`../i18n/legal-notice/${locale}.json`),
                    ['de-DE'],
                ),
            }),
        ],
    },

    {
        path: '**',
        redirectTo: 'profile',
    },
];
