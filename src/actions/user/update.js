const User = require("../../models/User");

const updateUser = async (data) => {
    try {
      const { email, score } = data;
      const userFound = await User.findOne({ email });
      userFound.score = score;
      const newUser = new User(userFound);
      const updatedUser = await newUser.save();
      return updatedUser;
    } catch (error) {
      throw new Error('There was error updating user');
    }
  };

  module.exports = { updateUser };
