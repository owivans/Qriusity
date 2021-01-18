const QuizAction = require('../actions/quiz/read')

exports.getQuiz = async (req, res) => {
    try {
        console.log(req.query, 'req.query')
        const quiz = await QuizAction.getQuizByCategory(req.query);
        res.status(200).send(quiz);
    } catch (error) {
        console.log(error)
        res.status(400).send('No se pudo obtener un quiz');
    }
};
