import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterContainerComponent} from '../ui/footer-container/footer-container.component';
import {NavContainerComponent} from '../ui/nav-container/nav-container.component';
import {provideNavigation} from '../ui/nav-container/provider';
import {NavFragmentsComponent} from '../ui/nav-fragments/nav-fragments.component';
import {withFragmentNavigation} from '../ui/nav-fragments/provider';
import {NavTitleComponent} from '../ui/nav-title/nav-title.component';

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    styleUrl: './root.component.scss',
    providers: [provideNavigation(withFragmentNavigation())],
    imports: [NavContainerComponent, NavTitleComponent, NavFragmentsComponent, RouterOutlet, FooterContainerComponent],
})
export class RootComponent {}
