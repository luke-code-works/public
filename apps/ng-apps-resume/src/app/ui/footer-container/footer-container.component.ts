import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'footer[app-footer-container]',
    templateUrl: './footer-container.component.html',
    styleUrl: './footer-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterContainerComponent {}
