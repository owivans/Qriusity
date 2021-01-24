const Quiz = require("../../models/Quiz");

const getQuizByCategory = async ({ category, difficulty }) => {
    try {
        const quiz = await Quiz.find({
            category:{ $eq: category},
            difficulty: difficulty,
        });
        return quiz;
    } catch (error) {
        throw new Error ('There was error fetching quiz');
    }
};

module.exports = { getQuizByCategory };
