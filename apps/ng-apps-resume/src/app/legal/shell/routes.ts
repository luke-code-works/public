export const LEGAL_ROUTE_PATHS = {
    ROOT: 'legal',
    PRIVACY_POLICY: 'privacy-policy',
    LEGAL_NOTICE: 'legal-notice',
};

export const legalRoutes = [
    {
        path: LEGAL_ROUTE_PATHS.ROOT,
        children: [
            {
                path: LEGAL_ROUTE_PATHS.PRIVACY_POLICY,
                loadComponent: () =>
                    import('./../feature-privacy-policy/privacy-policy.component').then(
                        (x) => x.PrivacyPolicyComponent,
                    ),
            },
            {
                path: LEGAL_ROUTE_PATHS.LEGAL_NOTICE,
                loadComponent: () =>
                    import('./../feature-legal-notice/legal-notice.component').then((x) => x.LegalNoticeComponent),
            },
        ],
    },
];
