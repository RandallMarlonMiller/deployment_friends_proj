var myApp= angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/list.html'
  })
  .when('/new', {
    templateUrl: 'partials/new.html'
  })
  .when('/update/:id', {
    templateUrl: 'partials/update.html'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html'
  })
  .otherwise({
    redirectTo: '/'
  })





})
