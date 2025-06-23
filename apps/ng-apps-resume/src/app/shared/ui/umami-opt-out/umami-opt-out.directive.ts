import {Directive, HostListener, inject, signal} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UmamiProxyService} from '../../util/umami/umami-proxy.service';

@Directive({
    selector: '[appUmamiOptOut]',
})
export class UmamiOptOutDirective {
    private readonly umamiService = inject(UmamiProxyService);
    private snackBar = inject(MatSnackBar);

    private clickCount = signal(0);

    @HostListener('click')
    click() {
        this.clickCount.update((x) => x + 1);

        if (this.clickCount() === 10) {
            this.umamiService.disableTracking();
            this.snackBar.open('Umami tracking disabled.', 'Dismiss', {
                duration: 3000,
            });
        }
    }
}
