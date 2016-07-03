class SearchListController {
	constructor($scope, SearchListService) {
		'ngInject';

		this.name = 'search';

		// refs
		this.$scope = $scope;
		this.SearchListService = SearchListService;
	}
	querySearch(searchText) {
		return this.SearchListService.searchAddress(searchText).then((result) => {
			return result;
		});
	}
}

export default SearchListController;
