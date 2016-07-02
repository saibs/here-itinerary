const searchConfig = ($stateProvider) => {

	$stateProvider
		.state('search', {
			url: '/search',
			template: '<search></search>'
		});
};

export default searchConfig;
