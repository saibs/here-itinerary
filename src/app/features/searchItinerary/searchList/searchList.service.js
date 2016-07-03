class SearchListService {
	constructor(BackendService) {
		'ngInject';

		this.BackendService = BackendService;
	}
	searchAddress(searchText) {
		return this.BackendService
			.searchAddress(searchText)
			.then((results) => {
				const resultView = results.data.Response.View[0];

				if (resultView) {
					return resultView.Result;
				}
				return [];
			});
	}
}

export default SearchListService;
