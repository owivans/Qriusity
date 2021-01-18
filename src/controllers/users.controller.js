const UserAction = require('../actions/user/create')

exports.userRegister = async (req, res) => {
    try {
        const createdUser = await UserAction.createUser(req.body);
        res.status(200).send(createdUser);
    } catch (error) {
        console.log(error)
        res.status(400).send('No se pudo crear el usuario');
    }
};
