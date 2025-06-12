import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector:
        'app-heading-with-dot,h1[app-heading-with-dot],h2[app-heading-with-dot],h3[app-heading-with-dot],h4[app-heading-with-dot],h5[app-heading-with-dot],h6[app-heading-with-dot]',
    templateUrl: './heading-with-dot.component.html',
    styleUrl: './heading-with-dot.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingWithDotComponent {}
