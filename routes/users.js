const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/pinterest_clone");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  dp: {
    type: String, // URL or path to the display picture
    default: ''
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }
  ]
}, { timestamps: true });

UserSchema.plugin(plm); 

module.exports = mongoose.model('User', UserSchema);