import {NavigationFeature} from '../../util/navigation/provider';
import {NavFragmentService} from './nav-fragment.service';

export function withFragmentNavigation(): NavigationFeature {
    return {providers: [NavFragmentService]};
}
