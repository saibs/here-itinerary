import angular from 'angular';
import 'angular-ui-router';
import service from './search.service';
import component from './search.component';
import config from './search.config';

const searchModule = angular.module('search', [
	'ui.router'
])
	.service('SearchService', service)
	.component('search', component)
	.config(config);

export default searchModule;
