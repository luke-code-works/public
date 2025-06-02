import {Signal} from '@angular/core';

export interface NavFragment {
    id: string;
    label: Signal<string>;
}
