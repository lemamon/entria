let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLString = require('graphql').GraphQLString;
let PostType = require('../../types/post');
let PostModel = require('../../../models/post');

exports.update = {
  type: PostType.postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
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
    return PostModel.findByIdAndUpdate(
      params.id,
      { $set: { 
              title: params.title, 
              content: params.content,
              image: params.image, 
            } 
      },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

