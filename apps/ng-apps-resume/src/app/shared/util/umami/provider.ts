import {provideAppInitializer} from '@angular/core';
import {initializeUmami$} from './functions';

export function provideUmami() {
    return provideAppInitializer(initializeUmami$);
}
