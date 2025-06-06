import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {globalTranslocoScope} from '../../root/root.component';

@Component({
    selector: 'app-copyright-notice',
    templateUrl: './copyright-notice.component.html',
    styleUrl: './copyright-notice.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslocoDirective],
    providers: [provideTranslocoScope(globalTranslocoScope)],
})
export class CopyrightNoticeComponent {
    protected readonly year = new Date().getFullYear();
}
