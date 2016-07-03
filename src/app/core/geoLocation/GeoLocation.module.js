import angular from 'angular';

import GeoLocationService from './geoLocation.service';

const GeoLocationServiceModule = angular.module('app.geoLocationService', [
])
	.service('GeoLocationService', GeoLocationService);

export default GeoLocationServiceModule;
