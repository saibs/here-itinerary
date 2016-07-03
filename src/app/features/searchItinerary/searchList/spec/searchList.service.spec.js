import angular from 'angular';
import module from '../searchList.module';

describe('Service: SearchService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
		$provide.service('BackendService', function($q) {
			this.searchAddress = (searchText) => {
				$q.resolve();
			};
			return this;
		});
	}));

	// Injections
	beforeEach(inject(function($injector, SearchListService) {
		this.service = SearchListService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
