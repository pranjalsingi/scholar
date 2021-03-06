var app = angular.module("profile");

app.controller("studentCtlr", ['$scope', '$window', 'studentSrvc', '$location', 'firebaseService', function($scope, $window, studentSrvc, $location,firebaseService){
	$scope.students = [];
	$scope.show_page = false;
	$scope.univs = firebaseService.getUniversities();
	$scope.univs.unshift("");
	$scope.progs = firebaseService.getPrograms();
	$scope.progs.unshift("");

	$scope.populateStudents = function(){
		studentSrvc.getStudents(function(student){
			$scope.students.push(student);
			// getStarStudents();
			$scope.show_page = true;
			$scope.$apply();
		}, function(error){
			console.log(error);
		});
	}

	$scope.goToId = function(id){
		$location.path('/info/'+id);
	}

	$scope.review = function(){
		console.log('review is called')
		$location.path('/review/'+$window.sessionStorage['id']);
	}

	$scope.edit = function(){
		$location.path('profile/'+$window.sessionStorage['id']);
	}

	$scope.student_signOut = function(){
		firebaseService.signOut();
		$location.path('/login?msg=Logged out successfully');
	}

	if($window.sessionStorage['id'] != undefined && $window.sessionStorage['id'] != null){
		$scope.populateStudents();
	}
	else{
		$location.path('/login?msg=You need to login first');
	}
}]);
