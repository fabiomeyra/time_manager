(function(){
	angular.module('timeApp').config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider.state('dashboard', {
				url:"/dashboard",
				templateUrl: "/dashboard/dashboard.html"
			}).state('projetos', {
				url: "/projetos",
				templateUrl: "/projetos/projetos.html"
			}).state('chamados', {
				url:"/chamados?page",
				templateUrl: "/chamados/tabs.html"
			})

			$urlRouterProvider.otherwise('/dashboard')
		}
		])
})()