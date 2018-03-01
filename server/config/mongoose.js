let env = process.env.NODE_ENV || 'development',
  config = require('./config')[env],
  mongoose = require('mongoose');

//to add defaul data
let data = require('./datasource').data;
let PostModel = require('../models/post');

let addDefaulData = collection => {
  mongoose.connection.db.collection(collection).count((err, count) => {
    if( count == 0) {
        data.forEach(item => {
          const pModel = new PostModel(item);
          const newPost = pModel.save();
          if (!newPost) {
            throw new Error('Error in add new post');
          }
        });
    }
  });
}

module.exports = function () {
  mongoose.Promise = global.Promise;
  let db = mongoose.connect(config.db, { useMongoClient: true });
  mongoose.connection.on('error', err => {
    console.log('Error: Could not connect to MongoDB.'.red);
  }).on('open', () => {
    console.log('Connection with MongoDB, OK');
    addDefaulData('posts');
  });

  return db;
};
