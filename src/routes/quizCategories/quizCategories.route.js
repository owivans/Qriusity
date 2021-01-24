const { Router } = require("express");
const QuizCategoriesController = require('../../controllers/quizCategories.controller')

const router = Router();

router.get("/all", QuizCategoriesController.getAllQuizCategories );

module.exports = router;