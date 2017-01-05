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

  //Apro in modifica l'elemento passato
  $scope.editCrib = function(crib) {
    $scope.editListing = true;
    $scope.existingListing = crib;
  }

  //Salvo le modifiche (finte) e chiudo la dialog
  $scope.saveCribEdit = function(listing) {
    $scope.existingListing = {};
    $scope.editListing = false;
  }

  //Elimino l'elemento passato dalla lista 
  $scope.deleteCrib = function(existingListing) {
    const index = $scope.cribs.indexOf(existingListing);
    $scope.cribs.splice(index, 1);
    $scope.existingListing = {};
    $scope.editListing = false;
  }

  //Recupero tutti gli oggetti presenti in cribs
  cribsFactory.getCribs().success(function(data) {
    $scope.cribs = data;
  }).error(function(error) {
    console.log(error);
  });

});




