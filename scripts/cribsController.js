// scripts/cribsController.js

angular
.module('cribsApp')
.controller('cribsController', function($scope, cribsFactory) {

  //TODO: communicate data to the view!
  // $scope.hello = "Hello World!";
  $scope.cribs;

  $scope.priceInfo = {
  	min: 0,
  	max: 1000000
  }

  //Creo nuovo oggetto dentro cribs 
  $scope.newListing = {};

  //Aggiungo un nuovo record all'oggetto cribs
  $scope.addCrib = function(newListing) {
    if(newListing) {
      newListing.image = "default-crib";
      $scope.cribs.push(newListing);
      //Svuoto oggetto cosi che alla pressione
      //di Add i campi risultino vuoti
      $scope.newListing = {};
    }
  }

  //Recupero tutti gli oggetti presenti in cribs
  cribsFactory.getCribs().success(function(data) {
    $scope.cribs = data;
  }).error(function(error) {
    console.log(error);
  });

});




