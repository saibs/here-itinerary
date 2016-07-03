import angular from 'angular';

import GeoLocationService from './GeoLocation.service';

const GeoLocationServiceModule = angular.module('GeoLocationService', [
])
	.service('GeoLocationService', GeoLocationService);

export default GeoLocationServiceModule;
