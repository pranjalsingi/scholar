var app = angular.module("profile");

app.controller("loginCtlr", ['$scope', 'homeSrvc', function($scope, homeSrvc){
	// $scope.users = [];

	// indexSrvc.getUsers(function(users){
	// 	$scope.users = users;
	// 	console.log(users);
	// 	$scope.$apply();
	// }, function(error){
	// 	console.log(error);
	// });



	var provider = new firebase.auth.FacebookAuthProvider();

	$scope.login_fb = function(){
		console.log("came inside fb login")
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
		// firebase.auth().getRedirectResult().then(function(result) {
		//   if (result.credential) {
		//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		//     var token = result.credential.accessToken;
		//     console.log(token);
		//     // ...
		//   }
		//   // The signed-in user info.
		//   var user = result.user;
		// }).catch(function(error) {
		//   // Handle Errors here.
		//   var errorCode = error.code;
		//   var errorMessage = error.message;
		//   // The email of the user's account used.
		//   var email = error.email;
		//   // The firebase.auth.AuthCredential type that was used.
		//   var credential = error.credential;
		//   // ...
		// });
	}


}]);