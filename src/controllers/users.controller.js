const UserAction = require('../actions/user')

exports.registerUser = async (req, res) => {
	try {
		const createdUser = await UserAction.createUser(req.body);
		res.status(200).send(createdUser);
	} catch (error) {
		res.status(400).send('There was error creating user');
	}
};

exports.updateUser = async (req, res) => {
	try {
		const updatedUser = await UserAction.updateUser(req.body);
		res.status(200).send(updatedUser);
	} catch (error) {
		res.status(400).send('There was error updating user');
	}
};

exports.getMinorUserRankByScore = async (req, res) => {
	try {
		const updatedUser = await UserAction.getMinorRankByScore(req.query);
		res.status(200).send(updatedUser);
	} catch (error) {
		res.status(400).send('There was error fetching user ranks');
	}
};
