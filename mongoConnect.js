//This is just a sample from the cluster - not used in the code yet
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@react-blog-fibv0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
