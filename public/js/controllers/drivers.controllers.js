angular.module( 'appRaces' )
	.controller( 'driverListCtrl' , driverListCtrl );
driverListCtrl.$inject = [ '$scope' ];
function driverListCtrl( $scope ) {
	$scope.driversList = [];

	//ejecute mi funcion para traerme los pilotos
	$scope.driversList = [
		{
			driver: {
				givenName: "Juan Domini",
				familyName: "Perez"
			},
			points: 300,
			nationality: "German",
			constructor: [
				{
					name: "Red bull"
				}
			]
		},
		{
			driver: {
				givenName: "Pepe Paco",
				familyName: "Sanchez"
			},
			points: 355,
			nationality: "Spanish",
			constructor: [
				{
					name: "Ferrary"
				}
			]
		}
	];

	console.log($scope.driversList);
}