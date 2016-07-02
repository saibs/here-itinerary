class SearchController {
	constructor($scope, SearchService) {
		'ngInject';

		this.name = 'search';

		// refs
		this.$scope = $scope;
		this.SearchService = SearchService;
	}
	querySearch(searchText) {
		return this.SearchService;
	}
}

export default SearchController;
