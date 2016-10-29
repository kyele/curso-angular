angular.module( 'appRaces' , [
	'ui.router'
])
.config( [ '$stateProvider' , '$urlRouterProvider' , '$locationProvider' ,
	function( $stateProvider , $urlRouterProvider , $locationProvider ) {
		'use strict';

		$urlRouterProvider
			.when( '/' , '/inicio' )
			.otherwise( '/' );
		$stateProvider
			.state( 'home' , {
				url: 			'/inicio',
				templateUrl: 	'public/views/home.html'
			})
			.state( 'drivers' , {
				url: 			'/conductores',
				templateUrl: 	'public/views/drivers.html',
				controller: 	'driverListCtrl',
				controllerAs: 	'pilot'
			})
				.state( 'cars' , {
					parent: 		'drivers',
					url: 			'^/automoviles',
					templateUrl: 	'public/views/cars.html',
					controller: 	'carCtrl',
					controllerAs: 	'car'
				})
			.state( 'driver' , {
				url: 			'/conductor/profile/:id',
				templateUrl: 	'public/views/driver_profile.html',
				controller: 	'driverCtrl',
				controllerAs: 	'driver'
 			})
		//$locationProvider.html5Mode(true);
	}
])
/*.component("probandoComponent", {
	template: [
	  '<div class="miclase">',
	  '<span>Esto es algo de HTML en el componente</span> ',
	  '<b>Angular Rules!</b>',
	  '</div>'
	].join('')
});*/