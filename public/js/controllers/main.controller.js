app.controller('MainController', function ($scope, HomeworkListFactory) {
	
	$scope.myname = 'Joe Beutler';
	$scope.showInfo = false;

	$scope.homeworkList = HomeworkListFactory.getHomework();


});