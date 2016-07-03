import angular from 'angular';

import StorageService from './StorageService.service';

const StorageServiceModule = angular.module('StorageService', [
])
	.service('StorageService', StorageService);

export default StorageServiceModule;
