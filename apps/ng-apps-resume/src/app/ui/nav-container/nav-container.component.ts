import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nav[app-nav-container]',
    templateUrl: './nav-container.component.html',
    styleUrl: './nav-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavContainerComponent {}
