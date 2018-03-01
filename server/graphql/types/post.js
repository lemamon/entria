let GraphQLObjectType = require('graphql').GraphQLObjectType;
let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLID = require('graphql').GraphQLID;
let GraphQLString = require('graphql').GraphQLString;

exports.postType = new GraphQLObjectType({
  name: 'post',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      title: {
        type: GraphQLString
      },
      content:{
        type: GraphQLString
      },
      image: {
        type: GraphQLString
      }
    }
  }
});

