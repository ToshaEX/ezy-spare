const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, minLength: 5, maxLength: 50 },
  last_name: { type: String, required: true, minLength: 5, maxLength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isSeller: { type: Boolean, default:false},
  date: { type: Date, default: Date.now },
},{collection:"users"});

module.exports =User=mongoose.model("UserSchema",UserSchema);
