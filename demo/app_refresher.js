var App = angular.module('App', ['ng-iscroll']);

App.controller('Controller', function ($scope)
{
    // Defines additional options such as onScrollEnd and other runtime settings
    // exposed by iScroll can be defined per id attribute
    $scope.$parent.myScrollOptions = {
        snap: false
    };
    
    $scope.list = [];
});