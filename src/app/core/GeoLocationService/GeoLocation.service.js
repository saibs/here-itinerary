class GeoLocationService {
	constructor($window, $q) {
		'ngInject';

		this.$window = $window;
		this.$q = $q;
	}
	getCurrentPosition() {
		const deferred = this.$q.defer();

		if (!this.$window.navigator.geolocation) {
			deferred.reject('Geolocation not supported.');
		} else {
			this.$window.navigator.geolocation.getCurrentPosition(
				(position) => {
					deferred.resolve(position.coords);
				},
				(err) => {
					deferred.reject(err);
				});
		}

		return deferred.promise;
	}
}

export default GeoLocationService;
