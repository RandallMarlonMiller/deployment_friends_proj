console.log('Friend Factory');

//need to review the factory section to determine what needs to go here. Do not understand lines 8 and below.


myApp.factory('FriendFactory',['$http', function($http){
    var factory = {};
    factory.create = function(newFriend, callback){
      $http.post('/friends', newFriend).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) == 'function'){
            callback(returned_data.data.friend);
         }//end of if
      })//end of .then function with data and params
  }//end of factory.create function
    factory.index = function(callback){
    $http.get('/friends').then(function(returned_data){
      console.log(returned_data.data);
      callback(returned_data.data.friends);
    })
  }//end of index function
    factory.delete = function(id,callback){
    $http.delete('/friends/'+id).then(function(returned_data){
      console.log('did you delete??',returned_data);
      callback(returned_data.data.friend);
    })
  }//end of delete function
    factory.show = function(id,callback){
    $http.get('/friends/'+id).then(function(returned_data){
        callback(returned_data.data.friend);
    })
  }
    factory.update = function(update_friend,callback){
      console.log('I am updating', update_friend);
    $http.put('/friends/'+ update_friend._id, update_friend).then(function(returned_data){
      console.log("is there DATA?",returned_data);
      callback(returned_data.data.friend);
    })
  }//end of update function
  return factory;
}]);
