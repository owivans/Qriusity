const User = require("../../models/User");

const createUser = async (data) => {
  try {
    console.log(User, 'User')

    const newUser = new User(data);
    const createdUser = await newUser.save();
    console.log("Admin user created", createdUser);
    return createdUser;
  } catch (error) {
    console.log(error)
    throw new Error('There was error creating user');
  }
  // const userFound = await User.findOne(data);
  // if (userFound) return;
};

module.exports = { createUser };
