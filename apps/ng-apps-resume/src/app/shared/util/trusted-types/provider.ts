import {makeEnvironmentProviders} from '@angular/core';
import {DOMPurifyTrustedTypeService} from './dom-purify-trusted-type.service';

export function provideDOMPurifyTrustedType(...params: ConstructorParameters<typeof DOMPurifyTrustedTypeService>) {
    return makeEnvironmentProviders([
        {
            provide: DOMPurifyTrustedTypeService,
            useFactory: () => new DOMPurifyTrustedTypeService(...params),
        },
    ]);
}
