const mongoose = require('mongoose');
// const Schema = mongoose.Schema;  same as line below
const { Schema } = mongoose;
// comment
const userSchema = new Schema({
  googleID: String,
<<<<<<< HEAD
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
  }
=======
>>>>>>> ee69649d784d7ec04dab70e8134bb513c1635c79
});

mongoose.model('users', userSchema);
