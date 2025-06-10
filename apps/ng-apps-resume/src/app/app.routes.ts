import {Route} from '@angular/router';
import {legalRoutes} from './legal/shell/routes';
import {RESUME_ROUTE_PATHS, resumeRoutes} from './resume/shell/routes';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `${RESUME_ROUTE_PATHS.ROOT}/${RESUME_ROUTE_PATHS.PROFILE}`,
    },
    ...resumeRoutes,
    ...legalRoutes,
    {
        path: '**',
        redirectTo: `${RESUME_ROUTE_PATHS.ROOT}/${RESUME_ROUTE_PATHS.PROFILE}`,
    },
];
