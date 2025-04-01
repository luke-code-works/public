import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./ui/privacy-policy/privacy-policy.component').then((x) => x.PrivacyPolicyComponent),
    },
    {
        path: 'legal-notice',
        loadComponent: () => import('./ui/legal-notice/legal-notice.component').then((x) => x.LegalNoticeComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./ui/home/home.component').then((x) => x.HomeComponent),
    },
];
