import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NavFragmentService} from './nav-fragment.service';

@Component({
    selector: 'app-nav-fragments',
    templateUrl: './nav-fragments.component.html',
    styleUrl: './nav-fragments.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, NgClass],
})
export class NavFragmentsComponent {
    protected navFragmentService = inject(NavFragmentService);
    protected activatedRoute = inject(ActivatedRoute);

    protected activeRouteFragment = toSignal(this.activatedRoute.fragment, {initialValue: undefined});
}
