import {signal} from '@angular/core';
import {RouteFragment} from './route-fragment.type';

export class RouteFragmentNavigationService {
    private readonly _routeFragments = signal<RouteFragment[]>([]);
    readonly routeFragments = this._routeFragments.asReadonly();

    setRouteFragments(routeFragments: RouteFragment[]) {
        this._routeFragments.set(routeFragments);
    }

    addRouteFragments(routeFragments: RouteFragment[]) {
        const ids = new Set(routeFragments.map(({id}) => id));
        const hasId = this._routeFragments().find((routeFragment) => ids.has(routeFragment.id));
        if (hasId) {
            throw new Error(`Route fragment with id ${hasId.id} already exists.`);
        }

        this._routeFragments.update((x) => [...x, ...routeFragments]);
    }

    removeRouteFragments(routeFragments: RouteFragment[]) {
        const ids = new Set(routeFragments.map(({id}) => id));
        this._routeFragments.update((routeFragments) => routeFragments.filter(({id}) => !ids.has(id)));
    }

    clearRouteFragments() {
        this._routeFragments.set([]);
    }
}
