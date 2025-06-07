import {assertInInjectionContext, DestroyRef, inject} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {RouteFragmentNavigationService} from './route-fragment-navigation.service';
import {RouteFragment} from './route-fragment.type';

export function useRouteFragments$(routeFragments$: Observable<RouteFragment[]>) {
    // Ensure injection context
    assertInInjectionContext(useRouteFragments$);

    const routeFragmentNavigationService = inject(RouteFragmentNavigationService);
    const destroyRef = inject(DestroyRef);

    let routeFragments: RouteFragment[] = [];

    destroyRef.onDestroy(() => routeFragmentNavigationService.removeRouteFragments(routeFragments));

    return routeFragments$.pipe(
        tap((newRouteFragments) => {
            routeFragmentNavigationService.removeRouteFragments(routeFragments);
            routeFragmentNavigationService.addRouteFragments(newRouteFragments);
            routeFragments = newRouteFragments;
        }),
    );
}
