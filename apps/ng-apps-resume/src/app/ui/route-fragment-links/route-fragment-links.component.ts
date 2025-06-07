import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {RouteFragmentNavigationService} from '../../util/route-fragment-navigation/route-fragment-navigation.service';

@Component({
    selector: 'app-route-fragment-links',
    templateUrl: './route-fragment-links.component.html',
    styleUrl: './route-fragment-links.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, NgClass],
})
export class RouteFragmentLinksComponent {
    private activatedRoute = inject(ActivatedRoute);
    protected routeFragmentNavigationService = inject(RouteFragmentNavigationService);

    protected activeRouteFragment = toSignal(this.activatedRoute.fragment, {initialValue: undefined});
}
