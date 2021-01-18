const { Router } = require("express");
const UserController = require('../../controllers/users.controller')

const router = Router();

router.post("/register", UserController.userRegister );

module.exports = router;