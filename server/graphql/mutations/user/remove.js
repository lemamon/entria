let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLString = require('graphql').GraphQLString;
let UserType = require('../../types/user');
let UserModel = require('../../../models/user');

exports.remove = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeduser = UserModel.findByIdAndRemove(params.id).exec();
    if (!removeduser) {
      throw new Error('Error')
    }
    return removeduser;
  }
}
