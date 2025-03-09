import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'header[app-header-container]',
    templateUrl: './header-container.component.html',
    styleUrl: './header-container.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent {}
