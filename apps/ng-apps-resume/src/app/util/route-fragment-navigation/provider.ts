import {NavigationFeature} from '../navigation/provider';
import {RouteFragmentNavigationService} from './route-fragment-navigation.service';

export function withRouteFragmentNavigation(): NavigationFeature {
    return {providers: [RouteFragmentNavigationService]};
}
