import {Provider} from '@angular/core';

export function provideNavigation(...features: NavigationFeature[]): Provider[] {
    return [...features.flatMap((x) => x.providers)];
}

export interface NavigationFeature {
    providers: Provider[];
}
