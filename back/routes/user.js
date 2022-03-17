const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const emailCheck = require('../middleware/emailCheck');
const passwordCheck = require('../middleware/paswordCheck')

router.post("/signup", emailCheck, passwordCheck, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
