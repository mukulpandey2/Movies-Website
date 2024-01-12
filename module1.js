var app = angular.module("myMod",['ngRoute']);

app.config(["$routeProvider",function($routeProvider){

    $routeProvider.$routeProvider
    When("/Hollywood",{
        tamplateUrl:'view/hollywood.html'
    }).
    When("/Bollywood",{
        tamplateUrl:'view/bollywood.html'
    }).
    otherwise({
        redirectTo:'test.html'
    })
    

}])



app.controller("ctr", function($scope){

});
