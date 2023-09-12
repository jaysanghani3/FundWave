// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
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
    // validate: {
    //   validator: function (value) {
    //     return value === this.password;
    //   },
    //   message: 'Passwords do not match',
    // },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// hash password before saving user to database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 12);
    this.confirmPassword = bcrypt.hashSync(this.password, 12);
  }
  next();
});

// generate token
userSchema.methods.generateAuthToken = async function () {
  try{
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token }); // token(schema vadu): token(let vadu)
    await this.save();
    return token;
  }
  catch(error){
    console.log(error);
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;