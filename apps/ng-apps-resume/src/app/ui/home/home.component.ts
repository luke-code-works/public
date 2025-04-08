import {Component, DestroyRef, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {rxEffect} from 'ngxtension/rx-effect';
import {of} from 'rxjs';
import {useNavFragments$} from '../nav-fragments/nav-fragment.functions';
import {NavFragmentService} from '../nav-fragments/nav-fragment.service';
import {SparklingStarsParticleBackgroundComponent} from '../sparkling-stars-particle-background/sparkling-stars-particle-background.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MatIconModule, SparklingStarsParticleBackgroundComponent],
})
export class HomeComponent {
    constructor() {
        rxEffect(useNavFragments$(of(HOME_COMPONENT_FRAGMENTS), inject(NavFragmentService), inject(DestroyRef)));
    }
}

const HOME_COMPONENT_FRAGMENTS = [
    {id: 'tech-stack', label: 'label.tech-stack'},
    {id: 'agile-and-project', label: 'label.agile-and-project'},
    {id: 'education-and-career', label: 'label.education-and-career'},
];
