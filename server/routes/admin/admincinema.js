const express = require("express");
const {ViewCinema} = require("../../controllers/admin/admincinema");
const router = express.Router();

router.get("/", ViewCinema);

module.exports = router;
