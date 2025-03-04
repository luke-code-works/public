import {signal} from '@angular/core';
import {NavFragmentConfig} from './nav-fragment-config.type';

export class NavFragmentConfigService {
    private _fragmentConfigs = signal<NavFragmentConfig[]>([]);
    fragmentConfigs = this._fragmentConfigs.asReadonly();

    setFragmentConfigs(configs: NavFragmentConfig[]) {
        this._fragmentConfigs.set(configs);
    }
}
