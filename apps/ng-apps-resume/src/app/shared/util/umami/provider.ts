import {makeEnvironmentProviders, provideAppInitializer} from '@angular/core';
import {rxEffect} from 'ngxtension/rx-effect';
import {initializeUmami$} from './umami-init.functions';
import {UmamiProxyService} from './umami-proxy.service';

export function provideUmami() {
    return makeEnvironmentProviders([
        provideAppInitializer(() => {
            rxEffect(initializeUmami$());
        }),
        UmamiProxyService,
    ]);
}
