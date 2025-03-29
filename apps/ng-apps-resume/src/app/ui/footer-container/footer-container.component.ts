import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SparklingStarsParticleBackgroundComponent} from '../sparkling-stars-particle-background/sparkling-stars-particle-background.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'footer[app-footer-container]',
    templateUrl: './footer-container.component.html',
    styleUrl: './footer-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SparklingStarsParticleBackgroundComponent],
})
export class FooterContainerComponent {}
