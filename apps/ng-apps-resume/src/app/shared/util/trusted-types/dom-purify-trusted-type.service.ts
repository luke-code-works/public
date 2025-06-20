import DOMPurify from 'dompurify';
import {TrustedTypePolicy} from 'trusted-types';

/**
 * Allows custom dom purify trusted types policy
 */
export class DOMPurifyTrustedTypeService {
    readonly policy: TrustedTypePolicy | undefined = undefined;

    constructor(options: Pick<TrustedTypePolicyOptions, 'createScript' | 'createScriptURL'>) {
        if (window.trustedTypes) {
            const policy = window.trustedTypes?.createPolicy('dom-purify', {
                createHTML: (input: string) => DOMPurify.sanitize(input),
                createScript: options.createScript,
                createScriptURL: options.createScriptURL,
            });

            this.policy = policy;
        }
    }
}
