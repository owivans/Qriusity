const { Schema, model } = require("mongoose");


const QuizsSchema = new Schema({
  category: { type: String, required: true, },
  question: { type: Array, required: true, unique: true },
  difficulty: { type: String, required: true, },
});

// UserSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = model("Quizs", QuizsSchema);