import {Signal} from '@angular/core';

export interface RouteFragment {
    id: string;
    label: Signal<string>;
}
