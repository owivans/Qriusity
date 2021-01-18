const { Schema, model } = require("mongoose");


const QuizScoreSchema = new Schema({
  score: { type: Number, required: true, },
  time: { type: Number, required: true, unique: true },
  user: { type: Object, required: true, },
  quiz: { type: Object, required: true, },
});

// UserSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = model("QuizScore", QuizScoreSchema);