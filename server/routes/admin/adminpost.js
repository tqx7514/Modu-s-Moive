const express = require("express");
const { adminpostlist } = require("../../controllers/admin/adminpost");
const router = express.Router();

router.get("/postlist", adminpostlist);
