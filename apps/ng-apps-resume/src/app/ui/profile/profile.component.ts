import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {provideTranslocoScope, translateSignal, TranslocoDirective} from '@jsverse/transloco';
import {rxEffect} from 'ngxtension/rx-effect';
import {of} from 'rxjs';
import {Locale} from '../../util/transloco/locale';
import {createTranslocoInlineLoader} from '../../util/transloco/transloco-inline-loader-factory';
import {useNavFragments$} from '../nav-fragments/nav-fragment.functions';
import {SparklingStarsParticleBackgroundComponent} from '../sparkling-stars-particle-background/sparkling-stars-particle-background.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [MatIconModule, TranslocoDirective, SparklingStarsParticleBackgroundComponent],
    providers: [
        provideTranslocoScope({
            scope: 'profile',
            loader: createTranslocoInlineLoader(
                (locale: Locale) => import(`../../../i18n/profile/${locale}.json`),
                ['en-US'],
            ),
        }),
    ],
})
export class ProfileComponent {
    private fragments = [
        {
            id: 'tech-stack',
            label: translateSignal('fragments.techStack', {scope: 'profile', lang: 'en-US'}),
        },
        {
            id: 'agile-and-project',
            label: translateSignal('fragments.agileAndProject', {scope: 'profile', lang: 'en-US'}),
        },
        {
            id: 'education-and-career',
            label: translateSignal('fragments.educationAndCareer', {scope: 'profile', lang: 'en-US'}),
        },
    ];

    constructor() {
        rxEffect(useNavFragments$(of(this.fragments)));
    }
}
