const axios = require("axios");

exports.Movie = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
        const moviedetail = response.data;
        res.status(200).json(moviedetail);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
    console.log(id);
}
exports.Image = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
        const movieimage = response.data.posters;
        res.status(200).json(movieimage);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}
exports.Video = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
        const movievideo = response.data.results;
        res.status(200).json(movievideo);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}
exports.Credit = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
        const moviecredit = response.data.crew;
        const moviecredits = response.data.cast;
        res.status(200).json({moviecredit, moviecredits});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}