import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {GSAPScrollAnimateDirective} from '../../shared/ui/gsap-scroll-animate/gsap-scroll-animate.directive';
import {HeadingWithDotComponent} from '../../shared/ui/heading-with-dot/heading-with-dot.component';
import {TextObfuscationComponent} from '../../shared/ui/text-obfuscation/text-obfuscation.component';
import {UmamiTrackEventDirective} from '../../shared/ui/umami-track-event/umami-track-event.directive';
import {createTranslocoInlineLoader} from '../../shared/util/transloco/transloco-inline-loader-factory';
import {XorCipherPipe} from '../../shared/util/xor-cipher/xor-cipher.pipe';

const legalNoticeTranslocoScope = {
    scope: 'legal-notice',
    loader: createTranslocoInlineLoader((locale: string) => import(`./i18n/${locale}.json`), ['en-US', 'de-DE']),
};

@Component({
    selector: 'app-legal-notice',
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TranslocoDirective,
        HeadingWithDotComponent,
        XorCipherPipe,
        TextObfuscationComponent,
        GSAPScrollAnimateDirective,
        UmamiTrackEventDirective,
    ],
    providers: [provideTranslocoScope(legalNoticeTranslocoScope)],
})
export class LegalNoticeComponent {}
