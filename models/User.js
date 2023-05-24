const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
  isAdmin:{
    type:Boolean,
    require:false,
    default:false
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;