myApp.controller('newController', function($scope, FriendFactory, $location){

  $scope.createFriend = function(){
    FriendFactory.create($scope.newFriend, function(){
    $scope.friend = {};
    $location.url('/');
    })
  }
})
