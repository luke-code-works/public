import {Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {TextObfuscationComponent} from '../../../shared/ui/text-obfuscation/text-obfuscation.component';
import {Locale} from '../../../shared/util/transloco/locale';
import {createTranslocoInlineLoader} from '../../../shared/util/transloco/transloco-inline-loader-factory';
import {XorCipherPipe} from '../../../shared/util/xor-cipher/xor-cipher.pipe';

const legalNoticeTranslocoScope = {
    scope: 'legal-notice',
    loader: createTranslocoInlineLoader(
        (locale: Locale) => import(`../../../../i18n/legal-notice/${locale}.json`),
        ['de-DE'],
    ),
};

@Component({
    selector: 'app-legal-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
    imports: [TranslocoDirective, XorCipherPipe, TextObfuscationComponent],
    providers: [provideTranslocoScope(legalNoticeTranslocoScope)],
})
export class LegalNoticeComponent {}
