console.log('for your mongoose connection and model loading');

var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');


//mongoose.connect('mongodb://localhost/friends_db');
var models_path = path.join(__dirname + './../models')
var dbURI = 'mongodb://localhost/friends_db';

//CONNECTION HAPPENINGS ***********
mongoose.connect( dbURI );
/*
*  CONNECTION EVENTS
*  When successfully connected
*/
mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }` );
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});
/*
*  If the Node process ends, close the Mongoose connection
*/
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>= 0){
    require(models_path + '/' + file)
  }
});
