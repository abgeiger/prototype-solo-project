var app = angular.module('BattleApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/battle.view.html',
        controller: 'BattleController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});