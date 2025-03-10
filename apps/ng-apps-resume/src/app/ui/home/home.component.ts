import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {NavFragmentConfigService} from '../nav-fragments/nav-fragment-config.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [MatIconModule],
})
export class HomeComponent {
    constructor() {
        inject(NavFragmentConfigService).setFragmentConfigs([
            {id: 'skills', translationKey: 'label.skills'},
            {id: 'about', translationKey: 'label.about'},
            {id: 'test', translationKey: 'label.contact'},
        ]);
    }
}
