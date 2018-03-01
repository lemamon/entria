let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLString = require('graphql').GraphQLString;
let PostType = require('../../types/post');
let PostModel = require('../../../models/post');

exports.add = {
  type: PostType.postType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content:{
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const pModel = new PostModel(params);
    const newPost = pModel.save();
    if (!newPost) {
      throw new Error('Error in add new post');
    }
    return newPost;
  }
}