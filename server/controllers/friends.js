console.log('friends controller');
require('../config/mongoose');
var mongoose = require('mongoose');

var Friend = mongoose.model('Friend');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends) {
      res.json({placeholder:'index', friends:friends});
    })
  };
  this.create = function(req,res){
    console.log("CHECK",req);
    var friend = new Friend({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      created_at: new Date()
    });
    friend.save(function(err) {
      if(err){
        console.log("Ahoh something went wrong..:)");
      } else {
        res.json({placeholder:'create', friend:friend});
      }
    })
  };
  this.update = function(req,res){
    console.log("I am in update on the server");
    Friend.findOne({_id:req.params.id}, function(err, friend) {
      if(err){
        console.log(err);
      } else {
        friend.firstname = req.body.firstname;
        friend.lastname = req.body.lastname;
        friend.birthday = req.body.birthday;
        friend.save(function(err){
          if(err){
            console.log("something went wrong");
          } else {
            res.json({placeholder:'update', friend:friend});
          }
        });
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id:req.params.id}, function(err, friend){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully deleted a friend!');
        res.json({placeholder:'delete', friend:friend});
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({_id:req.params.id},function(err, friend){
      res.json({placeholder:'show', friend:friend});
    })
  };
}
module.exports = new FriendsController();
