let GraphQLList = require('graphql').GraphQLList;
let PostModel = require('../../models/post');
let postType = require('../types/post').postType;

exports.posts = {
  type: new GraphQLList(postType),
  resolve: function () {
    const posts = PostModel.find().exec()
    if (!posts) {
      throw new Error('Error in find posts');
    }
    return posts;
  }
};

