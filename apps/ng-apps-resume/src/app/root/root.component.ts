import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {CopyrightNoticeComponent} from '../ui/copyright-notice/copyright-notice.component';
import {FooterContainerComponent} from '../ui/footer-container/footer-container.component';
import {GitHubIconLinkComponent} from '../ui/github-icon-link/github-icon-link.component';
import {HeaderContainerComponent} from '../ui/header-container/header-container.component';
import {HeaderTitleComponent} from '../ui/header-title/header-title.component';
import {LinkedinIconLinkComponent} from '../ui/linkedin-icon-link/linkedin-icon-link.component';
import {MailIconLinkComponent} from '../ui/mail-icon-link/mail-icon-link.component';
import {RouteFragmentLinksComponent} from '../ui/route-fragment-links/route-fragment-links.component';
import {XorCipherPipe} from '../ui/xor-cipher/xor-cipher.pipe';
import {provideNavigation} from '../util/navigation/provider';
import {withRouteFragmentNavigation} from '../util/route-fragment-navigation/provider';
import {Locale, LOCALES} from '../util/transloco/locale';
import {createTranslocoInlineLoader} from '../util/transloco/transloco-inline-loader-factory';

export const globalTranslocoScope = {
    scope: 'global',
    loader: createTranslocoInlineLoader((locale: Locale) => import(`../../i18n/global/${locale}.json`), [...LOCALES]),
};

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    imports: [
        HeaderContainerComponent,
        HeaderTitleComponent,
        RouteFragmentLinksComponent,
        RouterOutlet,
        FooterContainerComponent,
        LinkedinIconLinkComponent,
        GitHubIconLinkComponent,
        XorCipherPipe,
        RouterLink,
        RouterLinkActive,
        TranslocoDirective,
        CopyrightNoticeComponent,
        MailIconLinkComponent,
    ],
    providers: [provideNavigation(withRouteFragmentNavigation()), provideTranslocoScope(globalTranslocoScope)],
})
export class RootComponent {}
