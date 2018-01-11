const mongoose = require('mongoose');
// const Schema = mongoose.Schema;  same as line below
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  eMail: {
    type: String,
    required: true,
  },
  preference: {
    type: String,
    required: false,
  },
});

mongoose.model('users', userSchema);
