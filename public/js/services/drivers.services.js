angular.module( 'appRaces' )
	.service( 'driverService' , driverService );
driverService.$inject = [ '$http' ];
function driverService( $http ) {
	
	var ergastAPI 			= {};
	var urlBase 			= 'http://ergast.com/api/';

	ergastAPI.getDrivers 	= function() {
		return $http({
			method: 'JSONP',
			url: urlBase+'f1/2016/driverStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

	return ergastAPI;
}