class SearchListController {
	constructor($scope, SearchListService) {
		'ngInject';

		this.name = 'search';

		// refs
		this.$scope = $scope;
		this.SearchListService = SearchListService;

		this.searchList = [];
	}
	querySearch(searchText) {
		return this.SearchListService.searchAddress(searchText).then((result) => {
			return result;
		});
	}
	selectAddress(address) {
		if (!address) {
			return;
		}
		this.searchList.push(address);
		this.searchText = '';
	}
	removeAddress(index) {
		return this.searchList.splice(index, 1);
	}
}

export default SearchListController;
