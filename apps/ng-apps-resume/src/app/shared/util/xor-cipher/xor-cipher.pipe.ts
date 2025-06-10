import {inject, Pipe, PipeTransform} from '@angular/core';
import {CryptoXor} from 'crypto-xor';
import {XOR_CIPHER_DEFAULT_KEY} from './provider';

@Pipe({
    name: 'xorCipher',
})
export class XorCipherPipe implements PipeTransform {
    private readonly defaultKey = inject(XOR_CIPHER_DEFAULT_KEY);

    transform(data: string, options?: XorCipherPipeOptions): string {
        options ??= {};
        options.mode ??= 'decrypt';
        options.key ??= this.defaultKey;

        return options.mode === 'encrypt' ? CryptoXor.encrypt(data, options.key) : CryptoXor.decrypt(data, options.key);
    }
}

type XorCipherPipeOptions = {mode?: 'decrypt' | 'encrypt'; key?: string};
