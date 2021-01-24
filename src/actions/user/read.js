const User = require("../../models/User");

const getMinorRankByScore = async ({userScore}) => {
	try {
		const userFound = await User.find({ score: { $lt: userScore } }).sort({score: -1});
		return userFound;
	} catch (error) {
		return error
	}
};

module.exports = { getMinorRankByScore };