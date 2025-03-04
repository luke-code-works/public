import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '**',
        loadComponent: () => import('./ui/home/home.component').then((x) => x.HomeComponent),
    },
];
