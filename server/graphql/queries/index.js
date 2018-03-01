let GraphQLObjectType = require('graphql').GraphQLObjectType;

let posts = require('./post').posts;
let users = require('./user').users;

exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users,
      posts
    }
  }
});

