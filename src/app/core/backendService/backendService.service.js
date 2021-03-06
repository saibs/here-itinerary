/**
 * @ngdoc service
 * @name backendService.service:BackendService
 *
 * @description
 *
 */
class BackendService {
	constructor($http, HEREMAPSCONFIG) {
		'ngInject';

		this.$http = $http;
		this.HEREMAPSCONFIG = HEREMAPSCONFIG;
		this.API_VERSION = 6.2;
		this.GEOCODE_URL = `https://geocoder.cit.api.here.com/${this.API_VERSION}/geocode.json?jsoncallback=JSON_CALLBACK`;
	}
	searchAddress(searchText) {
		return this.$http({
			method: 'JSONP',
			url: `${this.GEOCODE_URL}`,
			params: {
				searchtext: searchText,
				/*eslint-disable */
				app_id: this.HEREMAPSCONFIG.APP_CONFIG,
				app_code: this.HEREMAPSCONFIG.APP_CODE
				/*eslint-enable */
			}
		});
	}
}

export default BackendService;

