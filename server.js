const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
mongoose.promise = global.Promise;



// mongoose.connect('mongodb://localhost:27017/react-blog',{
mongoose.connect('mongodb://admin:ca2000@react-blog-fibv0.mongodb.net/test?retryWrites=true&w=majority',{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  });
mongoose.set('debug', true);
const {Schema} = mongoose;

const commentSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('comments', commentSchema);

const Comment = mongoose.model('comments');

app.use(express.static(path.join(__dirname, 'build')));

require('./commentRoutes')(app);

// app.get(`/api/product`, async (req, res) => {
//   let products = await Product.find();
//   return res.status(200).send(products);
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);