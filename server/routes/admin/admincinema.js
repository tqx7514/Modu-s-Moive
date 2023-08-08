const express = require("express");
const {AdminCinema} = require("../../controllers/admin/admincinema");
const router = express.Router();

router.get("/:page", AdminCinema);

module.exports = router;