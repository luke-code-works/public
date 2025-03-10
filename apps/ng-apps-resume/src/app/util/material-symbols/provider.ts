import {EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';

export function provideMaterialSymbols(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideAppInitializer(() => {
            registerMaterialSymbols(inject(MatIconRegistry));
        }),
    ]);
}

function registerMaterialSymbols(matIconRegistry: MatIconRegistry) {
    const fontSetClass = 'material-symbols-outlined';
    matIconRegistry.setDefaultFontSetClass(fontSetClass);
}
