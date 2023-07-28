const express = require("express");
const {UserList, UserDel, UserGrade} = require("../../controllers/admin/adminuser")
const router = express.Router();

router.get("/:page", UserList);
router.delete("/delete", UserDel);
router.post("/grade", UserGrade)

module.exports = router;
