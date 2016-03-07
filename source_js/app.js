var app=angular.module("mainApp",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl : './partials/list.html',
            controller: 'listController'
        })
        .when('/gallery', {
            templateUrl : './partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail/:rank', {
            templateUrl : './partials/details.html',
            controller: 'detailController'
        })
        .otherwise({
            redirectTo: '/list'
        });

});