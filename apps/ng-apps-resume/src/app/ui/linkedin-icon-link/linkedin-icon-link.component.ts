import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-linkedin-icon-link',
    templateUrl: './linkedin-icon-link.component.html',
    styleUrl: './linkedin-icon-link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinIconLinkComponent {
    href = input.required<string>();
    label = input<string>('Linkedin');
}
