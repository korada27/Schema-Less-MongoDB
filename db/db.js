var mongodb=require("mongodb");
var MongoClient=mongodb.MongoClient;
var url='mongodb://localhost:27017/nodeOne';
 	
   MongoClient.connect(url,function(err,db)// call back 
         {

            //  console.log(db)
			   if(err)
				   { 
					  console.log("unable to connect",err);
				   }
				 else
					{ 
					console.log('connection established',url);
                  module.exports = {
                      db: db
                  }
                }
         });
 