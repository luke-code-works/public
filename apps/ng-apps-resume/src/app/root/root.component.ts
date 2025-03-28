import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterContainerComponent} from '../ui/footer-container/footer-container.component';
import {HeaderContainerComponent} from '../ui/header-container/header-container.component';
import {HeaderTitleComponent} from '../ui/header-title/header-title.component';
import {withFragmentNavigation} from '../ui/nav-fragments/provider';
import {XorCipherPipe} from '../ui/xor-cipher/xor-cipher.pipe';
import {provideNavigation} from '../util/navigation/provider';

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    providers: [provideNavigation(withFragmentNavigation())],
    imports: [HeaderContainerComponent, HeaderTitleComponent, RouterOutlet, FooterContainerComponent, XorCipherPipe],
})
export class RootComponent {}
