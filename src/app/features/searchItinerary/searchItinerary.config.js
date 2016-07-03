import template from './searchItinerary.template.html';
import controller from './searchItinerary.controller';

const searchItineraryConfig = ($stateProvider) => {

	$stateProvider
		.state('search', {
			url: '/search',
			template,
			controller,
			controllerAs: '$ctrl'
		});
};

export default searchItineraryConfig;
