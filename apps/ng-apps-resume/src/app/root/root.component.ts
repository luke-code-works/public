import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {provideTranslocoScope, TranslocoDirective} from '@jsverse/transloco';
import {FooterContainerComponent} from '../ui/footer-container/footer-container.component';
import {HeaderContainerComponent} from '../ui/header-container/header-container.component';
import {HeaderTitleComponent} from '../ui/header-title/header-title.component';
import {NavFragmentsComponent} from '../ui/nav-fragments/nav-fragments.component';
import {withFragmentNavigation} from '../ui/nav-fragments/provider';
import {XorCipherPipe} from '../ui/xor-cipher/xor-cipher.pipe';
import {provideNavigation} from '../util/navigation/provider';
import {Locale, LOCALES} from '../util/transloco/locale';
import {createTranslocoInlineLoader} from '../util/transloco/transloco-inline-loader-factory';

const rootTranslocoScope = {
    scope: 'root',
    loader: createTranslocoInlineLoader((locale: Locale) => import(`../../i18n/root/${locale}.json`), [...LOCALES]),
};

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    imports: [
        HeaderContainerComponent,
        HeaderTitleComponent,
        NavFragmentsComponent,
        RouterOutlet,
        FooterContainerComponent,
        XorCipherPipe,
        RouterLink,
        RouterLinkActive,
        TranslocoDirective,
    ],
    providers: [provideNavigation(withFragmentNavigation()), provideTranslocoScope(rootTranslocoScope)],
})
export class RootComponent {
    protected readonly year = new Date().getFullYear();
}
