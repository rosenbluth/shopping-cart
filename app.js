var app = angular.module('shoppingCartApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
.when('/', {
    templateUrl: 'partials/homeIndex.html',
    controller: 'shoppingController',
})
.when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'cartController',
});
});
