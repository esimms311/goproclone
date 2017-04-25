angular.module('gopro', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/')

$stateProvider
.state('home', {
  url:'orp/',
  templateUrl: './templates/home.html',
  controller: 'homeCtrl'
})


})
