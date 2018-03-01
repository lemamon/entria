let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
let Model = mongoose.model('Post', postSchema);
module.exports = Model;
