(function(){
	angular.module('timeApp').controller('sideNavCrtrl', ['$mdSidenav', function ($mdSidenav) {
		let vm = this

		vm.toggle = ()=> $mdSidenav('left').toggle();

	}]);
})()