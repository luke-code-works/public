import {NavigationFeature} from '../nav-container/provider';
import {NavFragmentConfigService} from './nav-fragment-config.service';

export function withFragmentNavigation(): NavigationFeature {
    return {providers: [NavFragmentConfigService]};
}
