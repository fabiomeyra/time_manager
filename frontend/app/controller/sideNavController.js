(function(){
	angular.module('timeApp').controller('sideNavCrtrl', ['$mdSidenav', function ($mdSidenav) {
		let vm = this

		vm.toggle = ()=> $mdSidenav('left').toggle();

		function buildToggler(componentId) {
			return function() {
				$mdSidenav(componentId).toggle();
			};
		}
	}]);
})()