
angular.module( 'appRaces' )
	.controller( 'driverListCtrl' , driverListCtrl );
driverListCtrl.$inject = [ '$scope' , 'driverService' , '$state' ];
function driverListCtrl( $scope , driverService , $state ) {
	var pilot 			= this;
	pilot.driversList 	= [];

	driverService.getDrivers().success( function( response ) {
		pilot.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		console.log(response.MRData.StandingsTable.StandingsLists[0].DriverStandings);
	});

	pilot.details = function( id ){
		var id_driver 	= id;
		$state.go( 'driver' , { id : id_driver } );
	}
}
/*** Controller Pilot ***/
angular.module( 'appRaces' )
	.controller( 'driverCtrl' , driverCtrl );
driverCtrl.$inject = [ '$scope' , 'driverService' , '$stateParams' ];
function driverCtrl( $scope , driverService , $stateParams ) {
	var driver 		= this;
	var id 			= $stateParams.id;

	driver.id 		= id;
	driver.races 	= [];
    driver.driver 	= null;

    driverService.getDriverDetails(driver.id).success(function (response) {
        driver.pilot = response.MRData.
        				StandingsTable.StandingsLists[0].DriverStandings[0]; 
        //console.log(response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);
    });

    driverService.getDriverRaces(driver.id).success(function (response) {
        driver.races = response.MRData.RaceTable.Races; 
        //console.log(response.MRData.RaceTable.Races);
    });
}
/*** Controller Automoviles ***/
angular.module( 'appRaces' )
	.controller( 'carCtrl' , carCtrl );
carCtrl.$inject = [ '$scope' ];
function carCtrl( $scope ) {
	var car 		= this;
	car.nombre 		= "Rayo Macquen";
	console.log("si llama al controller");
}
/*** Controller Autopartes ***/
angular.module( 'appRaces' )
	.controller( 'reafactionCtrl' , reafactionCtrl );
reafactionCtrl.$inject = [ '$scope' ];
function reafactionCtrl( $scope ) {
	var item 		= this;
	item.nombre 	= "Llantas";
}