var myApp = angular.module('myNewApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/menu', {
      templateUrl: 'views/menu.html',
      controller: 'MyAppController'
    }).otherwise({
      redirectTo: '/home'
    });
}]);

myApp.controller('MyAppController', ['$scope', function($scope) {

  $scope.removeDrink = function(drink){
    var removedDrink = $scope.drinks.indexOf(drink);
    $scope.drinks.splice(removedDrink, 1);
  };

  $scope.addDrink = function(){
    $scope.drinks.push({
      name: $scope.newDrink.name,
      price: parseInt($scope.newDrink.price),
      available: true
    });
  };

  $scope.drinks = [
    {
      name: "Water",
      hydration: "Good Hydrated",
      color: "#ffffec",
      price: 1.5,
      available: true,
      thumb: "content/img/water.png"
    },
    {
      name: "Tea",
      hydration: "Good Hydrated",
      color: "#feff9e",
      price: 1.99,
      available: true,
      thumb: "content/img/tea.png"
    },
    {
      name: "Coffee",
      hydration: "Dehydrated",
      color: "#fefd02",
      price: 2.20,
      available: true,
      thumb: "content/img/coffee.png"
    },
    {
      name: "Beer",
      hydration: "Health risk! drink more water",
      color: "#ddd400",
      price: 3.10,
      available: false,
      thumb: "content/img/beer.png"
    },
    {
      name: "White Wine",
      hydration: "Health risk! drink more water",
      color: "#c5bd00",
      price: 5.95,
      available: true,
      thumb: "content/img/whiteWine.png"
    },
    {
      name: "Red Wine",
      hydration: "Health risk! drink more water",
      color: "#aba401",
      price: 5.50,
      available: true,
      thumb: "content/img/redWine.png"
    }
  ];

}]);
