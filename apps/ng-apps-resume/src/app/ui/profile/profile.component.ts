import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {provideTranslocoScope, translateSignal, TranslocoDirective} from '@jsverse/transloco';
import {rxEffect} from 'ngxtension/rx-effect';
import {of} from 'rxjs';
import {useRouteFragments$} from '../../util/route-fragment-navigation/route-fragment.functions';
import {Locale, LOCALES} from '../../util/transloco/locale';
import {createTranslocoInlineLoader} from '../../util/transloco/transloco-inline-loader-factory';
import {SparklingStarsParticleBackgroundComponent} from '../sparkling-stars-particle-background/sparkling-stars-particle-background.component';

const profileTranslocoScope = {
    scope: 'profile',
    loader: createTranslocoInlineLoader(
        (locale: Locale) => import(`../../../i18n/profile/${locale}.json`),
        [...LOCALES],
    ),
};

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [MatIconModule, TranslocoDirective, SparklingStarsParticleBackgroundComponent],
    providers: [provideTranslocoScope(profileTranslocoScope)],
})
export class ProfileComponent {
    private routeFragments = [
        {
            id: 'tech-stack',
            label: translateSignal('fragments.tech-stack', {scope: profileTranslocoScope.scope}),
        },
        {
            id: 'agile-and-project',
            label: translateSignal('fragments.agile-and-project', {scope: profileTranslocoScope.scope}),
        },
        {
            id: 'education-and-career',
            label: translateSignal('fragments.education-and-career', {scope: profileTranslocoScope.scope}),
        },
    ];

    constructor() {
        rxEffect(useRouteFragments$(of(this.routeFragments)));
    }
}
