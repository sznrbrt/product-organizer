'use strict';

var app = angular.module('prodOrgApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
    })
    .state('products', {
      url:'/products',
      templateUrl: '/html/products.html',
      controller: 'productsCtrl',
    })
    .state('product', {
      url:'/product/:id',
      templateUrl: '/html/product.html',
      controller: 'productCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
