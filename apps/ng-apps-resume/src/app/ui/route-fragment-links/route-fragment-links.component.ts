import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {RouteFragmentNavigationService} from '../../util/route-fragment-navigation/route-fragment-navigation.service';

@Component({
    selector: 'app-route-fragment-links',
    templateUrl: './route-fragment-links.component.html',
    styleUrl: './route-fragment-links.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
})
export class RouteFragmentLinksComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    protected readonly routeFragmentNavigationService = inject(RouteFragmentNavigationService);

    protected readonly activeRouteFragment = toSignal(this.activatedRoute.fragment, {initialValue: undefined});
}
