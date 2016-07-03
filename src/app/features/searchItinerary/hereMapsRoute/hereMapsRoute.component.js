import template from './hereMapsRoute.html';
import controller from './hereMapsRoute.controller';

const hereMapsRouteComponent = {
	template,
	controller,
	bindings: {
		wayPoints: '<',
		mode: '@'
	}
};

export default hereMapsRouteComponent;
