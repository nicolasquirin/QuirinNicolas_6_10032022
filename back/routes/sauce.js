const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const multer = require("../middleware/multer-config");

const sauceCtrl = require("../controllers/sauce");

const userIdcheck = require("../middleware/userIdCheck");

router.get("/", auth, sauceCtrl.getAllSauces);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, userIdcheck, sauceCtrl.modifySauce);
router.delete("/:id", auth, userIdcheck, sauceCtrl.deleteSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/:id/like", auth, sauceCtrl.getLikes);

module.exports = router;
