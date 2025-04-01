import {Component} from '@angular/core';
import {XorCipherPipe} from '../xor-cipher/xor-cipher.pipe';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [XorCipherPipe],
})
export class PrivacyPolicyComponent {}
