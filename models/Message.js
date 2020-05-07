const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, 'Email not Valid']
  },
  message: {
    type: String,
    required: [true, 'Please Pass Your Message']
  },
  sentDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', MessageSchema);
