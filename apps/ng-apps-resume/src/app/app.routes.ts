import {Route} from '@angular/router';

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
    },
    {
        path: 'legal-notice',
        loadComponent: () => import('./ui/legal-notice/legal-notice.component').then((x) => x.LegalNoticeComponent),
    },

    {
        path: '**',
        redirectTo: 'profile',
    },
];
