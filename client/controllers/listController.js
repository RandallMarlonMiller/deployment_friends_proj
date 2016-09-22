myApp.controller('ListController', ['$scope', 'FriendFactory', '$location', '$route',
                function ($scope, FriendFactory, $location, $route){
  FriendFactory.index(function(friends){
    $scope.friends = friends;
    console.log('Friends List',$scope.friends);
  })
  $scope.createFriend = function(){
    $location.url('/new');
  }
  $scope.deleteFriend = function(id){
    FriendFactory.delete(id, function(){
      console.log('location');
      $route.reload();
    })
  }
  $scope.updateFriend = function(id){
    console.log("Update friend ID:::::",id);
    $location.url('/update/'+id);
  }
  $scope.showFriend = function(id){
    console.log("Show friend ID:::::",id);
    $location.url('/show/'+id);
  }
}])
