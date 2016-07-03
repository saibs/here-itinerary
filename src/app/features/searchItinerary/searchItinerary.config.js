import template from './searchItinerary.template.html';

const searchItineraryConfig = ($stateProvider) => {

	$stateProvider
		.state('search', {
			url: '/search',
			template
		});
};

export default searchItineraryConfig;
