// models/registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email address already registered'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
