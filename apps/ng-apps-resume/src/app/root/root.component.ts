import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterContainerComponent} from '../ui/footer-container/footer-container.component';
import {HeaderContainerComponent} from '../ui/header-container/header-container.component';
import {NavFragmentsComponent} from '../ui/nav-fragments/nav-fragments.component';
import {withFragmentNavigation} from '../ui/nav-fragments/provider';
import {NavTitleComponent} from '../ui/nav-title/nav-title.component';
import {SparklingStarsParticleBackgroundComponent} from '../ui/sparkling-stars-particle-background/sparkling-stars-particle-background.component';
import {provideNavigation} from '../util/navigation/provider';

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    providers: [provideNavigation(withFragmentNavigation())],
    imports: [
        SparklingStarsParticleBackgroundComponent,
        HeaderContainerComponent,
        NavTitleComponent,
        NavFragmentsComponent,
        RouterOutlet,
        FooterContainerComponent,
    ],
})
export class RootComponent {}
