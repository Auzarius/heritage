// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngRoute'])
	// configure our routes
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider

			.when('/', {
				templateUrl : './views/home.html'
			})
			
			.when('/login', {
				templateUrl : './views/login.html',
				controller  : 'mainController',
				controllerAs: 'login'
			})
			
			// backup 403 display if the server throws the 403 status code
			.when('/forbidden', {
				templateUrl : './views/403.html'
			})
			
			.when('/users', {
				templateUrl : './views/users/all.html',
				//controller  : 'userController',
				//controllerAs: 'user'
			})

			.when('/users/create', {
				templateUrl : './views/users/create.html',
				//controller  : 'userCreateController',
				//controllerAs: 'user'
			})

			.when('/users/:user_id', {
				templateUrl : './views/users/edit.html',
				//controller  : 'userEditController',
				//controllerAs: 'user'
			})
			
			.when('/profile', {
				templateUrl : './views/users/profile.html',
				//controller  : 'userProfileController',
				//controllerAs: 'user'
			})
			
			.otherwise({
				redirectTo: '/'
			});
			
			// set our app up to have pretty URLS
			$locationProvider.html5Mode(true);
	});
	