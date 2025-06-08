import {EnvironmentProviders, InjectionToken, makeEnvironmentProviders} from '@angular/core';

export const XOR_CIPHER_DEFAULT_KEY = new InjectionToken<string>('XOR cipher default key');

export function provideDefaultXorCipherDefaultKey(key: string): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: XOR_CIPHER_DEFAULT_KEY,
            useValue: key,
        },
    ]);
}
