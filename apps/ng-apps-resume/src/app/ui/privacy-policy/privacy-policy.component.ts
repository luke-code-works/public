import {Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {TextObfuscationComponent} from '../text-obfuscation/text-obfuscation.component';
import {XorCipherPipe} from '../xor-cipher/xor-cipher.pipe';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [TranslocoDirective, XorCipherPipe, TextObfuscationComponent],
})
export class PrivacyPolicyComponent {}
