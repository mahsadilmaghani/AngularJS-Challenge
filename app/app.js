var myApp = angular.module('myNewApp', [])

myApp.controller('MyAppController', ['$scope', function($scope) {

  $scope.removeDrink = function(drink){
    var removedDrink = $scope.drinks.indexOf(drink);
    $scope.drinks.splice(removedDrink, 1)

  }

  $scope.drinks = [
    {
      name: "Water",
      hydration: "Good Hydrated",
      color: "#ffffec",
      price: 1.5,
      available: true
    },
    {
      name: "Tea",
      hydration: "Good Hydrated",
      color: "#feff9e",
      price: 1.99,
      available: true
    },
    {
      name: "Coffee",
      hydration: "Dehydrated",
      color: "#fefd02",
      price: 2.20,
      available: true
    },
    {
      name: "Beer",
      hydration: "Health risk! drink more water",
      color: "#ddd400",
      price: 3.10,
      available: false
    },
    {
      name: "White Wine",
      hydration: "Health risk! drink more water",
      color: "#c5bd00",
      price: 5.95,
      available: true
    },
    {
      name: "Red Wine",
      hydration: "Health risk! drink more water",
      color: "#aba401",
      price: 5.50,
      available: true
    }
  ];

}]);
