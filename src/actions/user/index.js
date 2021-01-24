const { createUser } = require('./create.js');
const { updateUser } = require('./update.js');
const { getMinorRankByScore } = require('./read.js');

exports.createUser = createUser;
exports.updateUser = updateUser;
exports.getMinorRankByScore = getMinorRankByScore;
