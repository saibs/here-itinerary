import angular from 'angular';
import module from '../searchList.module';

describe('Controller: SearchController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.service('SearchListService', function() {
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('searchList',
			{
				// locals
				$scope: this.$scope,
				$element: [{}],
				$attrs: []
			},
			{
				// scope bindings
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});
});
