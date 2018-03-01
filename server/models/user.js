let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});
let Model = mongoose.model('User', userSchema);
module.exports = Model;
