export const RESUME_ROUTE_PATHS = {
    ROOT: 'resume',
    PROFILE: 'profile',
};

export const resumeRoutes = [
    {
        path: RESUME_ROUTE_PATHS.ROOT,
        children: [
            {
                path: RESUME_ROUTE_PATHS.PROFILE,
                loadComponent: () => import('../feature-profile/profile.component').then((x) => x.ProfileComponent),
            },
        ],
    },
];
