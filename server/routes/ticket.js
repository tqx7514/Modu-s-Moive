const express = require("express");
const router = express.Router();

const { cinemas, regions, movies } = require("../models");

router.get("/region", async (req, res) => {
  try {
    const region = await regions.findAll({
      include: [{
        model: cinemas,
        as: 'cinemas',
      }]
    });
    res.status(200).json(region);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/cinema", async (req, res) => {
  try {
    const { grade } = req.query;
    if (grade) {
      const cinema = await cinemas.findAll({
        include: [
          {
            model: regions,
            as: "grade_region",
            where: { grade },
          },
        ],
        order: [["cinema", "ASC"]],
      });
      res.status(200).json(cinema);
    }
  } catch (e) {
    console.error(e);
  }
});

router.get("/movies", async (req, res) => {
  try {
    const movie = await movies.findAll({});
    res.status(200).json(movie);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;