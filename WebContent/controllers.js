angular.module('myApp.controllers', []).controller('finCtrl', function($scope) 
		{
        	   		$scope.salary = 0;
        	   		$scope.name='anuj';
        	   		$scope.percentage = 0;
        	   		$scope.result = function() {
        	   		return $scope.salary * $scope.percentage * 0.01;
        	   		};
        	   		
})
.controller('greetCtrl',function($scope)
		{
			$scope.now = new Date();
			$scope.helloMessages =['Hello', 'Bonjour', 'Hola', 'Ciao','Halla'];
			$scope.greeting =$scope.helloMessages[0];
			$scope.randomGreeting = function(){
			$scope.greeting=$scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
		}

})
.controller('imagegotCtrl',function($scope)
		{
			
			$scope.imageURL =['smiley.gif', 'klematis2.jpg', 'klematis.jpg'];
			$scope.imageURLS =$scope.imageURL[0];
			$scope.randomImage = function(){
			$scope.imageURLS=$scope.imageURL[parseInt((Math.random() * $scope.imageURL.length))];
		}

})
;

//this is my commit 