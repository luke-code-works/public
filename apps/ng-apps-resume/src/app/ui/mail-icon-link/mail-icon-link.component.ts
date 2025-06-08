import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-mail-icon-link',
    templateUrl: './mail-icon-link.component.html',
    styleUrl: './mail-icon-link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailIconLinkComponent {
    readonly href = input.required<string>();
    readonly label = input<string>('Mail');
}
