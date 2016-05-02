'use strict';

var app = angular.module('prodOrgApp');

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl');
})

app.controller('productCtrl', function($scope, $stateParams, Products) {
  console.log('productCtrl');
  Products.getByID($stateParams.id)
  .then((prod) => {
    $scope.currentProduct = prod[0];
  })
})

app.controller('productsCtrl', function($scope, Products, $state) {
  console.log('productsCtrl');
  Products.getAll()
  .then((products) => {
    $scope.products = products;
    console.log($scope.products);
  });

  $scope.newProduct = {};

  $scope.sortBy = (order) => {

    if($scope.sortOrder === order) {
      $scope.sortOrder = "-" + order;
    } else {
      $scope.sortOrder = order;
    }
  };

  $scope.openAddProduct = function () {
    $scope.addingProduct = true;
  }

  $scope.addNewProduct = function () {
    if(!$scope.newProduct.name) return;
    if(!$scope.newProduct.desc) return;
    if(!$scope.newProduct.price) return;
    if(!$scope.newProduct.category) return;
    if(!$scope.newProduct.imgUrl) $scope.newProduct.imgUrl = "http://placehold.it/50x50";
    $scope.newProduct.id = products.reduce((acc, prod) => {return acc < prod.id ? prod.id : acc}, 0) + 1;
    products.push($scope.newProduct);
    $scope.newProduct = {};
    $scope.addingProduct = false;
  }

  $scope.cancel = function () {
    $scope.newProduct = {};
    $scope.addingProduct = false;
  }

  $scope.goToProduct = (id) => {
    $state.go('product', {"id": id});
  }
})
