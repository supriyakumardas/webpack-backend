const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 
  email: {
    type: String,
    required: false,
    unique: false,
  },
  mobile:{
    type: String,
    required: false,
    unique: false,
  },
  password: {
    type: String,
    required: false,
  },
 
});

const UserProfile = mongoose.model("UserProfile", userSchema);

module.exports = UserProfile;
