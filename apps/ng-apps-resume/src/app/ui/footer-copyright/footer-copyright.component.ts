import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {globalTranslocoScope} from '../../root/root.component';

@Component({
    selector: 'app-footer-copyright',
    templateUrl: './footer-copyright.component.html',
    styleUrl: './footer-copyright.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslocoDirective],
    providers: [provideTranslocoScope(globalTranslocoScope)],
})
export class FooterCopyrightComponent {
    protected readonly year = new Date().getFullYear();
}
