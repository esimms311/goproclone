angular.module('gopro', ['ui-router'])
.config(function($stateProvider, $urlRouterProvider){

$urlrouter.otherwise('/')

$stateProvider
.state('home', {
  url:'/',
  templateUrl: './templates/home.html',
  controller: 'homeCtrl'
})







})
