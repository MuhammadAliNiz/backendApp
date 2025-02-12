const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,

  },
  imgname: {
    type: String,
    required: true,
  },
},{ toObject: { versionKey: false } });

module.exports = mongoose.model("User", userSchema);
