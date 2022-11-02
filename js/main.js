var myApp = angular.module('productApp', []);
myApp.controller('productCtrl', function ($scope){
    var products = [
        {name: "iPhone 11 64GB",category: "Smart Phone",status:0, price: 1179000},
        {name: "iPhone 13 Pro Max 128GB ",category: "Smart Phone",status:1, price: 28290000},
        {name: "iPhone 14 Pro Max 128GB ",category: "Smart Phone",status:1, price: 3399000},
        {name: "iPhone 14 Pro 128GB",category: "Smart Phone",status:0, price: 3050000},
        {name: "iPhone 14 Plus",category: "Smart Phone",status:0, price: 2679000},
        {name: "iPhone 14",category: "Smart Phone",status:0, price: 20090}
    ]
    $scope.products = products;
    $scope.addProduct = function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.message = "New product added successful!";
    };
    $scope.editProduct = function(){
        $scope.message = "Edit product information sucessfuly!";
    };
    $scope.selectProduct = function(product){
        console.log(product);
        $scope.clickedProduct = product;
    };
    $scope.deleteProduct = function(){
        $scope.products.splice($scope.products.indexOf($scope.clickedProduct), 1);
        $scope.message = "Product deleted successful!";
    };
    $scope.clearMessage = function(){
        $scope.message = "";
    };
})
myApp.filter('status', function (){
    return function (input) {
        if (input == 0) return "Not Active";
        if (input == 1) return "Active";
    }
});