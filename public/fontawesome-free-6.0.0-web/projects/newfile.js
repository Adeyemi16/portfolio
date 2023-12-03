var app = angular.module("newApp", []);
app.controller("newController", function($scope, $http){

    var onSuccess = function(response){
        $scope.users = response.data;
    };
    var onError = function(response){
        $scope.error = "Could not find the users";
    };
    $http
         .get("http://api.github.com/users/oluwadamola")
         .then(onSuccess, onError);
})