import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {provideTranslocoScope, translateSignal, TranslocoDirective} from '@jsverse/transloco';
import {rxEffect} from 'ngxtension/rx-effect';
import {of} from 'rxjs';
import {GSAPScrollAnimateDirective} from '../../shared/ui/gsap-scroll-animate/gsap-scroll-animate.directive';
import {HeadingWithDotComponent} from '../../shared/ui/heading-with-dot/heading-with-dot.component';
import {useRouteFragments$} from '../../shared/util/route-fragment-navigation/route-fragment.functions';
import {createTranslocoInlineLoader} from '../../shared/util/transloco/transloco-inline-loader-factory';
import {ProfileCoverComponent} from '../ui/profile-cover/profile-cover.component';

const profileTranslocoScope = {
    scope: 'profile',
    loader: createTranslocoInlineLoader((locale: string) => import(`./i18n/${locale}.json`), ['en-US', 'de-DE']),
};

@Component({
    selector: 'app-resume-profile',
    templateUrl: './profile.component.html',
    imports: [
        MatIconModule,
        TranslocoDirective,
        ProfileCoverComponent,
        HeadingWithDotComponent,
        GSAPScrollAnimateDirective,
    ],
    providers: [provideTranslocoScope(profileTranslocoScope)],
})
export class ProfileComponent {
    private readonly routeFragments = [
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
