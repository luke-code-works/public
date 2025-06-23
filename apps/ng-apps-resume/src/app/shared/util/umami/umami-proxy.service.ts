import {UmamiError} from './umami-error';
import {UmamiWindow} from './umami-window.type';

export class UmamiProxyService {
    async track(name?: string, data?: object): Promise<unknown> {
        const umami = getUmami();

        if (name && data) {
            return umami.track(name, data);
        }

        if (name) {
            return umami.track(name);
        }

        if (data) {
            return umami.track(data);
        }

        return umami.track();
    }

    async identify(uniqueId?: string, data?: object): Promise<unknown> {
        const umami = getUmami();

        if (uniqueId && data) {
            return umami.identify(uniqueId, data);
        }

        if (uniqueId) {
            return umami.identify(uniqueId);
        }

        if (data) {
            return umami.identify(data);
        }

        throw new UmamiError('Umami identification requires uniqueId or other data.');
    }

    async disableTracking() {
        const umami = getUmami();

        umami.track('tracking-disabled');
        localStorage.setItem(umamiDisabledStorageKey, '1');
    }
}

const umamiDisabledStorageKey = 'umami.disabled';

function getUmami() {
    if (!window.umami) {
        throw new UmamiError('Umami is not initialized.');
    }

    return window.umami;
}

declare const window: UmamiWindow;
