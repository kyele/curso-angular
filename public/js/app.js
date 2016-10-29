angular.module( 'appRaces' , [
	'ui.router'
])
.config( [ '$stateProvider' , '$urlRouterProvider' ,
	function( $stateProvider , $urlRouterProvider ) {
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
				controller: 	'driverListCtrl'
			})
	}
])