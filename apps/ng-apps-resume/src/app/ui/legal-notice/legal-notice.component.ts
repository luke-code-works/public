import {Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {Locale} from '../../util/transloco/locale';
import {createTranslocoInlineLoader} from '../../util/transloco/transloco-inline-loader-factory';
import {TextObfuscationComponent} from '../text-obfuscation/text-obfuscation.component';
import {XorCipherPipe} from '../xor-cipher/xor-cipher.pipe';

@Component({
    selector: 'app-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
    imports: [TranslocoDirective, XorCipherPipe, TextObfuscationComponent],
    providers: [
        provideTranslocoScope({
            scope: 'legalNotice',
            loader: createTranslocoInlineLoader(
                (locale: Locale) => import(`../../../i18n/legal-notice/${locale}.json`),
                ['de-DE'],
            ),
        }),
    ],
})
export class LegalNoticeComponent {}
