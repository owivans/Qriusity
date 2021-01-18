const { Schema, model } = require("mongoose");


const UserSchema = new Schema({
  name: { type: String, required: true, },
  nickName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  avatar: { type: String },
});

// UserSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = model("User", UserSchema);
