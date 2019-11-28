const mongoose = require('mongoose');
const Comment = mongoose.model('comments');

module.exports = (app) => {

  // app.get(`/api/product`, async (req, res) => {
  //   let comments = await Comment.find();
  //   return res.status(200).send(comments);
  // });

  app.get(`/api/product`, async (req, res) => {
    let comment = await Comment.create({name:"Shahnaz",description:"Ajmeri"});
    return res.status(201).send({
      error: false,
      comment
    })
  })

  // app.put(`/api/Comment/:id`, async (req, res) => {
  //   const {id} = req.params;

  //   let Comment = await Comment.findByIdAndUpdate(id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     Comment
  //   })

  // });

  // app.delete(`/api/product/:id`, async (req, res) => {
  //   const {id} = req.params;

  //   let product = await Product.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     product
  //   })

  // })

}
