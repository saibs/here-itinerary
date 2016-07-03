import component from '../searchList.component';
import template from '../searchList.html';
import controller from '../searchList.controller';

describe('Component: search', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
