const mongoose = require('mongoose');
// const Schema = mongoose.Schema;  same as line below
const { Schema } = mongoose;
// comment
const userSchema = new Schema({
  googleID: String,
});

mongoose.model('users', userSchema);
