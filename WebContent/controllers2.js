angular.module('myApp.controllers',[]).controller('SiteController'
			, function($scope){
			$scope.publisher='SitePoint';
			$scope.type="Web Development";
			$scope.name="Scope for SiteController";
			})
			
.controller('BookController'
			, function($scope){
			$scope.books = ['Jump Start HTML5','Jump Start CSS','Jump StartResponsive Web Design'];
			$scope.name="Scope for BookController";
			$scope.addToWishList=function(book){
				$scope.wishListCount++;
			};
			$scope.wishListCount=0;	
			$scope.$watch('wishListCount',function(newValue,oldValue){
				console.log('called '+newValue+' times');
				if(newValue==4){
				alert('Great! You have' + newValue+' items in your wish list. Time to buy what you love. ');
				}
				});
			})
			
.controller('TimeOutController',
			function($scope){
	$scope.scheduleTask = function() {
		setTimeout(function() {
		$scope.$apply(function() { // wrapped the code in $apply()
		$scope.message = 'Fetched after 3 seconds';
		//will reflect in view
		console.log('message=' + $scope.message);
				});
		}, 3000);
		}		})	
			
		
		;
