const express = require("express");
const router = express.Router();

router.get("/cinema", (req, res) => {
    const cinema = findAll({});
    
});

module.exports = router;