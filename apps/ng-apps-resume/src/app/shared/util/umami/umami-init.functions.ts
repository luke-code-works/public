import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {assertInInjectionContext, ErrorHandler, inject, isDevMode, PLATFORM_ID} from '@angular/core';
import {catchError, map, of, tap} from 'rxjs';
import {DOMPurifyTrustedTypeService} from '../trusted-types/dom-purify-trusted-type.service';
import {UmamiConfig} from './umami-config.type';
import {UmamiError} from './umami-error';

export function fetchUmamiConfig$(path: string, deps: {httpClient: HttpClient}) {
    // TODO: Replace with zod someday
    return deps.httpClient.get<{umami: UmamiConfig}>(path).pipe(
        map((config) => {
            if (!config.umami) {
                throw new UmamiError('Umami config is missing.');
            }

            return config.umami;
        }),
        map((config) => {
            if (!config.scriptUrl || !config.websiteId) {
                throw new UmamiError('Umami config is missing required scriptUrl or websiteId.');
            }

            return config;
        }),
    );
}

export function appendUmamiScript(
    config: UmamiConfig,
    deps: {document: Document; platformId: object; domPurifyTrustedTypesService: DOMPurifyTrustedTypeService},
): void {
    if (!isPlatformBrowser(deps.platformId)) {
        // Not running in browser platform; skip script injection
        return;
    }

    if (config.enabled === false) {
        // Tracking disabled: skip script injection
        return;
    }

    const selector = `script[data-website-id="${config.websiteId}"]`;
    if (deps.document.querySelector(selector)) {
        // Script already present; skip injection
        return;
    }

    if (!deps.document.head) {
        throw new UmamiError('Unable to access <head> element in document.');
    }

    const script = deps.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', config.websiteId);
    const trustedScriptUrl =
        deps.domPurifyTrustedTypesService.policy?.createScriptURL(config.scriptUrl) ?? config.scriptUrl;
    script.src = String(trustedScriptUrl);

    deps.document.head.appendChild(script);
}

export function initializeUmami$() {
    assertInInjectionContext(initializeUmami$);

    const httpClient = inject(HttpClient);
    const document = inject(DOCUMENT);
    const platformId = inject(PLATFORM_ID);
    const errorHandler = inject(ErrorHandler);
    const domPurifyTrustedTypesService = inject(DOMPurifyTrustedTypeService);

    const path = `config/umami.config${isDevMode() ? '.dev' : ''}.json`;

    return fetchUmamiConfig$(path, {httpClient}).pipe(
        tap((config) => appendUmamiScript(config, {document, platformId, domPurifyTrustedTypesService})),
        catchError((error) => {
            const handledError =
                error instanceof UmamiError
                    ? error
                    : new UmamiError('Umami failed initialization', {originalError: error});
            errorHandler.handleError(handledError);

            // Continue the stream gracefully by emitting null
            return of(null);
        }),
    );
}
