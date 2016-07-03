class HereMapsRouteController {
	constructor($scope, $element, $window, HEREMAPSCONFIG, GeoLocationService) {
		'ngInject';

		this.name = 'hereMapsRoute';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$window = $window;
		this.HEREMAPSCONFIG = HEREMAPSCONFIG;
		this.GeoLocationService = GeoLocationService;

		this.routeCalculateSuccess = this.routeCalculateSuccess.bind(this);
		this.routeCalculateError = this.routeCalculateError.bind(this);
	}

	$onInit() {
		this.platform = new H.service.Platform({
			/*eslint-disable */
			app_id: this.HEREMAPSCONFIG.APP_CONFIG,
			app_code: this.HEREMAPSCONFIG.APP_CODE
			/*eslint-enable */
		});
		this.defaultLayers = this.platform.createDefaultLayers();
	}

	$postLink() {
		this.mapContainer = this.$element[0].querySelector('.maps');
		this.GeoLocationService.getCurrentPosition()
			.then((coords) => {
				this.geoCoords = coords;
				return this.geoCoords;
			})
			.then(() => {
				this.map = new H.Map(this.mapContainer,
					this.defaultLayers.normal.map, {
						center: {
							lat: this.geoCoords.latitude,
							lng: this.geoCoords.longitude
						},
						zoom: 13
					});
				this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

				// Create the default UI components
				this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
			});

		//Map resize
		this.$window.addEventListener('resize', () => {
			if (this.map) {
				this.map.getViewPort().resize();
			}
		});
	}

	$onChanges(changes) {
		if (changes && changes.wayPoints && changes.wayPoints.currentValue) {
			this.calculateRouteFromAtoB();
		}
	}

	calculateRouteFromAtoB() {
		const router = this.platform.getRoutingService(),
			routeRequestParams = {
				mode: 'fastest;car',
				representation: 'display',
				routeattributes: 'waypoints,summary,shape,legs',
				maneuverattributes: 'direction,action'
			};

		Object.assign(routeRequestParams, routeRequestParams, this.wayPoints);

		router.calculateRoute(
			routeRequestParams,
			this.routeCalculateSuccess,
			this.routeCalculateError
		);
	}
	routeCalculateSuccess(result) {
		if (!result.response) {
			return;
		}
		const route = result.response.route[0];

		this.addRouteShapeToMap(route);
	}
	routeCalculateError(err) {
		console.log(err);
	}
	addRouteShapeToMap(route) {
		const strip = new H.geo.Strip(),
			routeShape = route.shape;

		routeShape.forEach(function(point) {
			const parts = point.split(',');

			strip.pushLatLngAlt(parts[0], parts[1]);
		});

		if (this.polyline) {
			this.map.removeObject(this.polyline);
		}
		this.polyline = new H.map.Polyline(strip, {
			style: {
				lineWidth: 4,
				strokeColor: 'rgba(0, 128, 255, 0.7)'
			}
		});
		// Add the polyline to the map
		this.map.addObject(this.polyline);
		// And zoom to its bounding rectangle
		this.map.setViewBounds(this.polyline.getBounds(), true);
	}
}

export default HereMapsRouteController;
