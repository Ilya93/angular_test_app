var app = angular.module('my_test_app', ['ui.router']);
app.directive('app', function() {
    return {
      restrict: 'E',
      template:'<div class = "my_container container"> <div class="item"> <nav class="navbar navbar-default" role="navigation"><ul class="nav navbar-nav"><li><a ui-sref="route1">route1</a></li><li><a ui-sref="route2">route2</a></li><li><a ui-sref="route3">route3</a></li><li><a ui-sref="route4">route4</a></li><li><a ui-sref="route5">route5</a></li></ul></nav></div><div class="item"><div class="content" ui-view></div></div></div>'
    }
});
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/route1');
    $stateProvider
        .state('route1', {
            url: '/route1',
            template: '<h1>route1</h1>'
        })
        .state('route2', {
            url: '/route2',
            template: '<h1>route2</h1>'
        })
        .state('route3', {
            url: '/route3',
            template: '<h1>route3</h1>'
        })
        .state('route4', {
            url: '/route4',
            template: '<h1>route4</h1>'
        })
        .state('route5', {
            url: '/route5',
            template: '<h1>route5</h1>'
        })
});


