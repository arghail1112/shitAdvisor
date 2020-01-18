const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model('users', user);