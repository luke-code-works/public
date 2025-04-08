import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FooterContainerComponent} from '../ui/footer-container/footer-container.component';
import {HeaderContainerComponent} from '../ui/header-container/header-container.component';
import {HeaderTitleComponent} from '../ui/header-title/header-title.component';
import {NavFragmentsComponent} from '../ui/nav-fragments/nav-fragments.component';
import {withFragmentNavigation} from '../ui/nav-fragments/provider';
import {XorCipherPipe} from '../ui/xor-cipher/xor-cipher.pipe';
import {provideNavigation} from '../util/navigation/provider';

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    providers: [provideNavigation(withFragmentNavigation())],
    imports: [
        HeaderContainerComponent,
        HeaderTitleComponent,
        NavFragmentsComponent,
        RouterOutlet,
        FooterContainerComponent,
        XorCipherPipe,
        RouterLink,
    ],
})
export class RootComponent {}
