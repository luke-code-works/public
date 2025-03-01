import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NxWelcomeComponent} from '../nx-welcome/nx-welcome.component';

@Component({
    selector: 'app-root,body[app-root]',
    templateUrl: './root.component.html',
    imports: [NxWelcomeComponent, RouterModule],
})
export class RootComponent {}
