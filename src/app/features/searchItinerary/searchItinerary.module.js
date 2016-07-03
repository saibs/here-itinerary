import angular from 'angular';
import config from './searchItinerary.config';
import searchList from './searchList/searchList.module';
import hereMapsRoute from './hereMapsRoute/hereMapsRoute.module';

const searchItineraryModule = angular.module('app.searchItinerary', [
	searchList.name,
	hereMapsRoute.name
])
	.config(config);

export default searchItineraryModule;
