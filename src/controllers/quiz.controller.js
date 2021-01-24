const QuizAction = require('../actions/quiz/read')

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await QuizAction.getQuizByCategory(req.query);
    res.status(200).send(quiz);
  } catch (error) {
    res.status(400).send('There was error fetching quiz');
  }
};
