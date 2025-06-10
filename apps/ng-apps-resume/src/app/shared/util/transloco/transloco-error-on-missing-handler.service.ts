import {ErrorHandler, inject} from '@angular/core';
import {
    HashMap,
    TRANSLOCO_LOADING_TEMPLATE,
    TranslocoMissingHandler,
    TranslocoMissingHandlerData,
} from '@jsverse/transloco';
import {TranslationNotFoundError} from './translation-not-found-error';

export class TranslocoErrorOnMissingHandler implements TranslocoMissingHandler {
    private readonly errorHandler = inject(ErrorHandler);
    private readonly translocoLoadingTemplate = inject(TRANSLOCO_LOADING_TEMPLATE);

    handle(key: string, data: TranslocoMissingHandlerData, params?: HashMap) {
        if (data.missingHandler?.logMissingKey) {
            this.errorHandler.handleError(
                new TranslationNotFoundError(`Missing translation for key '${key}'`, {
                    translocoConfigData: data,
                    translocoParams: params,
                }),
            );
        }

        return this.translocoLoadingTemplate;
    }
}
