const express = require("express");
const router = express.Router();
const { cinemas, regions } = require("../models");

router.get("/cinema", async (req, res) => {
  try {
    const cinema = await cinemas.findAll({
      order: [["cinema", "ASC"]],
      include: [
        {
          model: regions,
          as: "grade_region",
        },
      ],
    });
    console.log(cinema);

    res.status(200).json(cinema);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
