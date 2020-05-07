const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required']
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    match: [/\S+@\S+\.\S+/, 'Email not Valid']
  },
  password: {
    type: String,
    required: [true, 'Password is Required']
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
