import {assertInInjectionContext, DestroyRef, inject} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {NavFragmentService} from './nav-fragment.service';
import {NavFragment} from './nav-fragment.type';

export function useNavFragments$(fragments$: Observable<NavFragment[]>) {
    // Ensure injection context
    assertInInjectionContext(useNavFragments$);

    const navFragmentService = inject(NavFragmentService);
    const destroyRef = inject(DestroyRef);

    let fragments: NavFragment[] = [];

    destroyRef.onDestroy(() => navFragmentService.removeFragments(fragments));

    return fragments$.pipe(
        tap((newFragments) => {
            navFragmentService.removeFragments(fragments);
            navFragmentService.addFragments(newFragments);
            fragments = newFragments;
        }),
    );
}
