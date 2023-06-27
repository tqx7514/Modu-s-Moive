const express = require("express");
const { register, check, login, logout } = require("../controllers/auth");
const router = express.Router();

router.post("/register", register);
router.get("/check", check);
router.post("/login", login);
router.post("/logout", logout);


module.exports = router;
