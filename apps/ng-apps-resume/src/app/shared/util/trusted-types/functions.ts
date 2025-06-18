import {TrustedTypeError} from './trusted-type-error';
export function trustScriptUrlByOrigins(input: string, allowedOrigins: string[]) {
    const url = new URL(input);

    if (!allowedOrigins.includes(url.hostname)) {
        throw new TrustedTypeError('Trusted-type: Blocked untrusted origin', {url: url.href});
    }

    return url.href;
}
