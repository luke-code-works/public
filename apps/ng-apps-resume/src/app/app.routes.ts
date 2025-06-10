import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
    },
    {
        path: 'profile',
        loadComponent: () => import('./resume/feature/profile/profile.component').then((x) => x.ProfileComponent),
    },
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('./legal/feature/privacy-policy/privacy-policy.component').then((x) => x.PrivacyPolicyComponent),
    },
    {
        path: 'legal-notice',
        loadComponent: () =>
            import('./legal/feature/legal-notice/legal-notice.component').then((x) => x.LegalNoticeComponent),
    },

    {
        path: '**',
        redirectTo: 'profile',
    },
];
