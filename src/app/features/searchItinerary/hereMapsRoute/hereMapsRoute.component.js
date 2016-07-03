import template from './hereMapsRoute.html';
import controller from './hereMapsRoute.controller';

const hereMapsRouteComponent = {
	template,
	controller,
	bindings: {
		wayPoints: '<'
	}
};

export default hereMapsRouteComponent;
