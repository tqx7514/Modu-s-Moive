const express = require("express");
const axios = require("axios");
const {Movie, Image, Video, Credit} = require("../controllers/movie");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const response = await axios.get(apiKey);
        const movielist = response.data.results;
        res.status(200).json(movielist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
});
router.get("../detail/:id", Movie, Image, Video, Credit);


module.exports = router;