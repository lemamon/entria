let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLString = require('graphql').GraphQLString;
let PostType = require('../../types/post');
let PostModel = require('../../../models/post');

exports.remove = {
  type: PostType.postType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedPost = PostModel.findByIdAndRemove(params.id).exec();
    if (!removedPost) {
      throw new Error('Error in remove post');
    }
    return removedPost;
  }
}
