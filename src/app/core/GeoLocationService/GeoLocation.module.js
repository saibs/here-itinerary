import angular from 'angular';

import GeoLocationService from './GeoLocation.service';

const GeoLocationServiceModule = angular.module('app.geoLocationService', [
])
	.service('GeoLocationService', GeoLocationService);

export default GeoLocationServiceModule;
