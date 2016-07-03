import angular from 'angular';
import service from './searchList.service';
import component from './searchList.component';

const searchModule = angular.module('app.searchList', [
])
	.service('SearchListService', service)
	.component('searchList', component);

export default searchModule;
