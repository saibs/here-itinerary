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
				() => {
					// If error return Berlin coords
					deferred.resolve({
						latitude: 52.5160,
						longitude: 13.3779
					});
				});
		}

		return deferred.promise;
	}
}

export default GeoLocationService;
