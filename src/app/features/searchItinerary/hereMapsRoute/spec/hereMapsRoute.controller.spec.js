import angular from 'angular';
import module from '../hereMapsRoute.module';

describe('Controller: HereMapsRouteController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.value('HEREMAPSCONFIG', {});
		$provide.service('GeoLocationService', function() {
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('hereMapsRoute',
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
