import component from '../hereMapsRoute.component';
import template from '../hereMapsRoute.html';
import controller from '../hereMapsRoute.controller';

describe('Component: hereMapsRoute', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
