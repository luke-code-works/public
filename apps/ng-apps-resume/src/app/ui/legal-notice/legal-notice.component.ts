import {Component} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {TextObfuscationComponent} from '../text-obfuscation/text-obfuscation.component';
import {XorCipherPipe} from '../xor-cipher/xor-cipher.pipe';

@Component({
    selector: 'app-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
    imports: [TranslocoDirective, XorCipherPipe, TextObfuscationComponent],
})
export class LegalNoticeComponent {}
