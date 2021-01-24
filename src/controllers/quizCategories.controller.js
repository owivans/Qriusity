const QuizAction = require('../actions/quizCategories/read')

exports.getAllQuizCategories = async (req, res) => {
  try {
    const quiz = await QuizAction.getQuizCategories();
    res.sendStatus(200).send(quiz);
  } catch (error) {
    res.sendStatus(400).send('No se pudo obtener un quiz');
  }
};
