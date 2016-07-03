import template from './searchList.html';
import controller from './searchList.controller';

const searchComponent = {
	template,
	controller,
	bindings: {
		findItinerary: '&'
	}
};

export default searchComponent;
