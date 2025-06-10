import {Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {Locale} from '@jsverse/transloco-locale';
import {TextObfuscationComponent} from '../../../shared/ui/text-obfuscation/text-obfuscation.component';
import {LOCALES} from '../../../shared/util/transloco/locale';
import {createTranslocoInlineLoader} from '../../../shared/util/transloco/transloco-inline-loader-factory';
import {XorCipherPipe} from '../../../shared/util/xor-cipher/xor-cipher.pipe';

const privacyPolicyTranslocoScope = {
    scope: 'privacy-policy',
    loader: createTranslocoInlineLoader(
        (locale: Locale) => import(`../../../../i18n/privacy-policy/${locale}.json`),
        [...LOCALES],
    ),
};

@Component({
    selector: 'app-legal-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [TranslocoDirective, XorCipherPipe, TextObfuscationComponent],
    providers: [provideTranslocoScope(privacyPolicyTranslocoScope)],
})
export class PrivacyPolicyComponent {}
