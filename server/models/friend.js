console.log('Welcome to the Friends Model')

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  birthday: Date,
  created_at: Date
})

mongoose.model('Friend', FriendSchema);
