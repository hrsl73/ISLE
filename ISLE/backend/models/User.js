const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false, // optional for email-based users
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // not required if logging in via Google
  },
  googleId: {
    type: String,
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
