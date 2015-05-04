app.directive('flashCard', function () {
    return {
    	scope: {
    		card: '='
		},
        restrict: 'E',
        templateUrl: 'js/directives/flash-card/flash-card.html'
    };
});