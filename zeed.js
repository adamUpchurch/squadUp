const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('../models/todoModel');
const {User} = require('../models/userModel');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'andrew@example.com',
  password: 'userOnePass',
  info: {
    userCreationDate: 1547470952
  },
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'jen@example.com',
  password: 'userTwoPass',
  info: {
    userCreationDate: 1547470952
  },
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  completion: {
    status: false,
  },
  created: {
    by: userTwoId,
    date: 1547557352
  }
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completion: {
    status: true,
    date: Date.now
  },
  created: {
    by: userOneId,
    date: 1547557352
  }
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
