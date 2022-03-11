const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");
const auth = require('../middleware/auth')

router.post("/", auth, stuffCtrl.createSauce);

router.get("/:id", auth, stuffCtrl.getOneSauce);

router.put("/:id", auth, stuffCtrl.modifySauce);

router.delete("/:id", auth, stuffCtrl.deleteSauce);

router.get("/" + "", auth, stuffCtrl.getAllSauce);

module.exports = router;
