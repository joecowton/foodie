const mongoose = require('mongoose');
// const Schema = mongoose.Schema;  same as line below
const { Schema } = mongoose;
// comment
const userSchema = new Schema({
  googleID: String,
  name: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  preference: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

mongoose.model('users', userSchema);
