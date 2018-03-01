let GraphQLList = require('graphql').GraphQLList;
let UserModel = require('../../models/user');
let userType = require('../types/user').userType;

exports.users = {
  type: new GraphQLList(userType),
  resolve: function () {
    const users = UserModel.find().exec()
    if (!users) {
      throw new Error('Error in find users');
    }
    return users;
  }

};

