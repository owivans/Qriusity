const { Router } = require("express");
const UserController = require('../../controllers/users.controller')

const router = Router();

router.post("/register", UserController.registerUser );
router.put("/update", UserController.updateUser );
router.get("/score", UserController.getMinorUserRankByScore );

module.exports = router;