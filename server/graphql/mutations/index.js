let addUser = require('./user/add').add;
let removeUser = require('./user/remove').remove;
let updateUser = require('./user/update').update;

let addPost = require('./post/add').add;
let removePost = require('./post/remove').remove;
let updatePost = require('./post/update').update;


module.exports = {
  addUser,
  removeUser,
  updateUser,
  addPost,
  removePost,
  updatePost
}