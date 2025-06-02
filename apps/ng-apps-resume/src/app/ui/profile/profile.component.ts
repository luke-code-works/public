import {Component, DestroyRef, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {rxEffect} from 'ngxtension/rx-effect';
import {of} from 'rxjs';
import {useNavFragments$} from '../nav-fragments/nav-fragment.functions';
import {NavFragmentService} from '../nav-fragments/nav-fragment.service';
import {SparklingStarsParticleBackgroundComponent} from '../sparkling-stars-particle-background/sparkling-stars-particle-background.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [MatIconModule, SparklingStarsParticleBackgroundComponent],
})
export class ProfileComponent {
    constructor() {
        rxEffect(useNavFragments$(of(PROFILE_COMPONENT_FRAGMENTS), inject(NavFragmentService), inject(DestroyRef)));
    }
}

const PROFILE_COMPONENT_FRAGMENTS = [
    {id: 'tech-stack', label: 'label.tech-stack'},
    {id: 'agile-and-project', label: 'label.agile-and-project'},
    {id: 'education-and-career', label: 'label.education-and-career'},
];
