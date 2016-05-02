'use strict';

var app = angular.module('prodOrgApp');

app.service('Products', function($q) {

  this.getAll = () => {
    return $q((resolve, reject) => {
      resolve(products);
    });
  }

  this.getByID = (id) => {
    return $q((resolve, reject) => {
      var product = products.filter((product) => {return product.id === parseInt(id)});
      if(product)
        resolve(product);
      else
        reject(new Error('Product not found.'));
    });
  }
})
