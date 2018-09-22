const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res, next) => {
    res.json(req.params)
})
/*
let MongoClient = require('mongodb').MongoClient;

let uri = "mongodb://root-user:ramanuja108@cluster0-shard-00-00-8wiwi.mongodb.net:27017,cluster0-shard-00-01-8wiwi.mongodb.net:27017,cluster0-shard-00-02-8wiwi.mongodb.net:27017/chandas?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
MongoClient.connect(uri, function(err, db) {
    if(err) console.log(err);
   db.close();
});
*/
module.exports = {
    path: '/lessons/:id',
    handler: app
}
