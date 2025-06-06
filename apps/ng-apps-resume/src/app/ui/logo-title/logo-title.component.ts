import {ChangeDetectionStrategy, Component, HostListener, inject, input, viewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ScrambledTextDirective} from '../scrambled-text/scrambled-text.directive';

@Component({
    selector: 'app-logo-title',
    templateUrl: './logo-title.component.html',
    styleUrl: './logo-title.component.scss',
    imports: [ScrambledTextDirective],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoTitleComponent {
    private router = inject(Router);

    title = input.required<string>();

    private scrambledTextDirective = viewChild(ScrambledTextDirective);

    @HostListener('click')
    protected click() {
        this.router.navigate(['']);
        this.scrambledTextDirective()?.scramble('redo');
    }
}
