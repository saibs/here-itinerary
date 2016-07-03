import angular from 'angular';
import config from './searchItinerary.config';
import searchList from './searchList/searchList.module';

const searchItineraryModule = angular.module('app.searchItinerary', [
	searchList.name
])
	.config(config);

export default searchItineraryModule;
