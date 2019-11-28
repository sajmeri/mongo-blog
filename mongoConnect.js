//This is just a sample from the cluster - not used in the code yet
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:ca2000@react-blog-fibv0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err, uri) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', uri);
  }
  client.close();
});
