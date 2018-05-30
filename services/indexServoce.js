var dbURl = require('../db/db.js');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
// mongoose.connect(dbConfig.url);
var Promise = require('promise');

var url = 'mongodb://localhost:27017/nodeOne';

var server = new MongoClient(url);


var first = function (data, res) {

	return new Promise(function (resolve, reject) {
		console.log('functions');
		MongoClient.connect(url, function (err, db) {
			if (err) {
				console.log("unable to connect", err);
				reject(err)
			}
			else {
				console.log('connection established', url);
				var collection = db.collection("product");
				collection.insert([data], function (err, result) {
					if (err) {
						console.log("======",err);
						reject(err);
					}
					else {
						console.log(result, "=============");
						resolve(result);
					}
				});
			}
		});

		console.log('data', data);
	})
}




module.exports = {

	first: first
}