const { Router } = require("express");
const QuizController = require('../../controllers/quiz.controller')

const router = Router();

router.get("/filter", QuizController.getQuiz );

module.exports = router;