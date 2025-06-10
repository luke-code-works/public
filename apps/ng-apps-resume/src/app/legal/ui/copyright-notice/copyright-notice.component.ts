import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {createTranslocoInlineLoader} from '../../../shared/util/transloco/transloco-inline-loader-factory';

const legalTranslocoScope = {
    scope: 'legal',
    loader: createTranslocoInlineLoader((locale: string) => import(`./../i18n/${locale}.json`), ['en-US', 'de-DE']),
};

@Component({
    selector: 'app-legal-copyright-notice',
    templateUrl: './copyright-notice.component.html',
    styleUrl: './copyright-notice.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslocoDirective],
    providers: [provideTranslocoScope(legalTranslocoScope)],
})
export class CopyrightNoticeComponent {
    protected readonly year = new Date().getFullYear();
}
