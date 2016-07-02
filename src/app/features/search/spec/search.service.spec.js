import angular from 'angular';
import module from '../search.module';

describe('Service: SearchService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, SearchService) {
		this.service = SearchService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
