const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Post = require('../models/post');


User.collection.drop();
Post.collection.drop();

User
.create([{
  email: 'jack@email.co',
  username: 'jackm',
  password: 'password'
}])
.then((users) => {
  console.log(`${users.length} users created`);
  return Post
    .create([{
      type: 'Looking for League',
      title: 'Need 2 more players!',
      content: 'Friendly group looking for 2 more players so we can expand from 8 teams to 10 for the upcoming season, sound off below if interested, drafting late august',
      createdBy: users[0]
    }, {
      type: 'Question',
      title: 'DJ or Lev Bell 1st overall?',
      content: 'I have the first pick on my draft and want help picking between these two, let me know what you\'d do!',
      createdBy: users[0]
    }]);
})
  .then((posts) => console.log(`${posts.length} posts created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
