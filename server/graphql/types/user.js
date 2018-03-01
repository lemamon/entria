let GraphQLObjectType = require('graphql').GraphQLObjectType;
let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLID = require('graphql').GraphQLID;
let GraphQLString = require('graphql').GraphQLString;

exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    }
  }
});

