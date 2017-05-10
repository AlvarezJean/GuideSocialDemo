angular.module('guideSocialApp', ['ngAnimate','ngMaterial',
 'ui.router',
 'app.routes',
 'toggleCtrl',
 'mainCtrl'


 ]);




// // application configuration to integrate token into requests
// .config(function($httpProvider) {

	
// 	// attach our auth interceptor to the http requests
// 	$httpProvider.interceptors.push('AuthInterceptor');

// });

