import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-resume-linkedin-icon-link',
    templateUrl: './linkedin-icon-link.component.html',
    styleUrl: './linkedin-icon-link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinIconLinkComponent {
    readonly href = input.required<string>();
    readonly label = input<string>('Linkedin');
}
