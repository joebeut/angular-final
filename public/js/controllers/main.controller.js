app.controller('MainController', function ($scope, HomeworkListFactory) {
	
	$scope.currentCategory = null;
	$scope.loading = true;
	$scope.myname = 'Joe Beutler';

	$scope.homeworkList = HomeworkListFactory.getHomework();


});