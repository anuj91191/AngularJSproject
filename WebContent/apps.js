'use strict';
angular.module('myApp',['myApp.controllers']);
angular.module('myApp').run(function($rootScope){
	$rootScope.title='Harry Potter';
	$rootScope.name='Root Scope';
});
