myApp.controller('showController', ['$scope', 'FriendFactory', '$routeParams', '$location',
                function ($scope, FriendFactory, $routeParams, $location){
  FriendFactory.show($routeParams.id,function(friend){
    $scope.friend = friend;
    $scope.friend.birthday = new Date(friend.birthday);
    $scope.friend.created_at = new Date(friend.created_at);
    console.log('Friend data*****',friend);
  });
  $scope.goBack = function(){
    $location.url('/');
  }
}])
