import angular from 'angular';
import 'angular-drag-and-drop-lists';
import service from './searchList.service';
import component from './searchList.component';

const searchModule = angular.module('app.searchList', [
	'dndLists'
])
	.service('SearchListService', service)
	.component('searchList', component);

export default searchModule;
