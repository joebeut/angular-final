app.controller('MainController', function ($scope, FlashCardsFactory, whateverName) {
	//$scope.flashCards = whateverName;

	//$scope.flashCards = FlashCardsFactory.getFlashCards();
	$scope.currentCategory = null;

	$scope.getCategoryCards = function (category) {
		$scope.currentCategory = category;
		$scope.getAllCards();
	}

	$scope.getAllCards = function () {
        FlashCardsFactory.getFlashCards($scope.currentCategory).then(function (cards) {
            $scope.flashCards = cards;
        });
    };

    $scope.getAllCards();

    $scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.answerQuestion = function (answer, flashCard) {

		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});