"use strict";angular.module("usermanagementTestApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/getting-started",{templateUrl:"views/getting-started.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("usermanagementTestApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);