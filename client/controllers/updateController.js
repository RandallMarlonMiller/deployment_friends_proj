myApp.controller('updateController', ['$scope', 'FriendFactory', '$routeParams', '$location',
                function ($scope, FriendFactory, $routeParams, $location){
  FriendFactory.show($routeParams.id,function(friend){
    $scope.friend = friend;
    $scope.friend.birthday = new Date(friend.birthday);
    console.log('FRIEND STUFF*******',friend);
  });
  $scope.updateFriend = function(){
    console.log($scope.friend);
    FriendFactory.update($scope.friend,function(){
      $location.url('/');
    })
  }
}])
