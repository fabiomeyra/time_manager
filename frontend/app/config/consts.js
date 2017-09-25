angular.module('timeApp').constant('consts', {
	appName: 'Gerenciado de Tempo',
	version: '0.0.1',
	owner: '@fabiomeyra',
	year: '2017',
	site: '',
	apiUrl: 'http://localhost:3004/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
	$rootScope.consts = consts
}])