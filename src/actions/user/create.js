const User = require("../../models/User");

const createUser = async (data) => {
  try {
    const { email } = data;
    const userFound = await User.findOne({ email });

    if (userFound) return userFound;
    const newUser = new User(data);
    const createdUser = await newUser.save();
    return createdUser;
  } catch (error) {
    console.log(error)
    throw new Error('There was error creating user');
  }
  // const userFound = await User.findOne(data);
  // if (userFound) return;
};

module.exports = { createUser };
