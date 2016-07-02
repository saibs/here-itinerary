import component from '../search.component';
import template from '../search.html';
import controller from '../search.controller';

describe('Component: search', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
