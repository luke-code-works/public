import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
    selector: 'app-github-icon-link',
    templateUrl: './github-icon-link.component.html',
    styleUrl: './github-icon-link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GitHubIconLinkComponent {
    href = input.required<string>();
    label = input<string>('GitHub');
}
