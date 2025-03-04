import {Component, HostListener, inject, input, viewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ScrambledTextDirective} from '../scrambled-text/scrambled-text.directive';

@Component({
    selector: 'app-nav-title',
    templateUrl: './nav-title.component.html',
    styleUrl: './nav-title.component.scss',
    imports: [ScrambledTextDirective],
})
export class NavTitleComponent {
    private router = inject(Router);

    title = input.required<string>();

    private scrambledTextDirective = viewChild(ScrambledTextDirective);

    @HostListener('click')
    protected click() {
        this.router.navigate([]);
        this.scrambledTextDirective()?.scramble('redo');
    }
}
