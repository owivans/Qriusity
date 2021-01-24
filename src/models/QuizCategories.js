const { Schema, model } = require("mongoose");


const QuizCategoriesSchema = new Schema({
  name: { type: String, required: true, },
  difficultyLevel: { type: Array, required: true,},
});

// UserSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = model("QuizCategories", QuizCategoriesSchema);