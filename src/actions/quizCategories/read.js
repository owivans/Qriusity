const QuizCategories = require("../../models/QuizCategories");

const getQuizCategories = async () => {
    try {
        const quizCategories = await QuizCategories.find({});
        return quizCategories;
    } catch (error) {
        throw new Error ('There was error fetching quiz');
    }
};

module.exports = { getQuizCategories };
