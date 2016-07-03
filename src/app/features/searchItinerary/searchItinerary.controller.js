import {forEach as _forEach} from 'lodash';

class SearchItinerary {
	constructor() {
	}
	findItinerary(searchList) {
		this.searchList = searchList;
		this.wayPoints = {};
		_forEach(this.searchList, (address, index) => {
			this.wayPoints[`waypoint${index}`] = `${address.Location.DisplayPosition.Latitude},${address.Location.DisplayPosition.Longitude}`;
		});
	}
}

export default SearchItinerary;
