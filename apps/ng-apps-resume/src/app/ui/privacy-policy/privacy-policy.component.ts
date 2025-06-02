import {Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {Locale} from '@jsverse/transloco-locale';
import {createTranslocoInlineLoader} from '../../util/transloco/transloco-inline-loader-factory';
import {TextObfuscationComponent} from '../text-obfuscation/text-obfuscation.component';
import {XorCipherPipe} from '../xor-cipher/xor-cipher.pipe';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [TranslocoDirective, XorCipherPipe, TextObfuscationComponent],
    providers: [
        provideTranslocoScope({
            scope: 'privacyPolicy',
            loader: createTranslocoInlineLoader(
                (locale: Locale) => import(`../../../i18n/privacy-policy/${locale}.json`),
                ['de-DE'],
            ),
        }),
    ],
})
export class PrivacyPolicyComponent {}
