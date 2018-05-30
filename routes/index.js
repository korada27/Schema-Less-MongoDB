var express = require('express');
var router = express.Router();
var fFunction = require('../services/indexServoce');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/first', function(req, res, next) {
  
var json ={'name': 'madhu'}
fFunction.first(json,res).then(function(result){
  if(result){
   
    res.send(JSON.stringify(result));
  }
})
.catch(function(err){

    res.send("Error");
  

});
 

});
module.exports = router;
 
 
 
 
 
 
 /*
 
 
 
 var express = require('express');
 var router = express.Router();
var mongodb = require('mongodb');
//var app = express();

var MongoClient = require('mongodb').MongoClient;
console.log("Hello")

// Reuse database object in request handlers
router.get("/insert", function(req, res) {
	console.log("Inside Router...!")
	MongoClient.connect("mongodb://localhost:27017/db", function(err, db) {
	//console.log(db)	
  database = db;
    console.log('MongoDB connection successful');
    var testUser = {
      "User Name": 'Madhu Korada'
    };
     
    db.users.create(testUser, function(err, docs) {
      if (err) {
        throw err;
      } else {
        console.log(docs);
      }
    });
	})
});


module.exports=router;
*/