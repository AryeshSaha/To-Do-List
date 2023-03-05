const mongoose = require("mongoose");

const UsersModel = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please enter your full name."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a new password"],
  },
});

const Users = mongoose.model("Users", UsersModel);
module.exports = Users
