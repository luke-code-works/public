import {signal} from '@angular/core';
import {NavFragment} from './nav-fragment.type';

export class NavFragmentService {
    private _fragments = signal<NavFragment[]>([]);
    fragments = this._fragments.asReadonly();

    setFragments(fragments: NavFragment[]) {
        this._fragments.set(fragments);
    }

    addFragments(fragments: NavFragment[]) {
        const ids = new Set(fragments.map(({id}) => id));
        const hasId = this._fragments().find((fragment) => ids.has(fragment.id));
        if (hasId) {
            throw new Error(`Fragment with id ${hasId.id} already exists.`);
        }

        this._fragments.update((x) => [...x, ...fragments]);
    }

    removeFragments(fragments: NavFragment[]) {
        const ids = new Set(fragments.map(({id}) => id));
        this._fragments.update((fragments) => fragments.filter(({id}) => !ids.has(id)));
    }

    clearFragments() {
        this._fragments.set([]);
    }
}
