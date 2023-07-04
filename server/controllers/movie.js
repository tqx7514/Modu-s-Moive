const axios = require("axios");

exports.List = async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const Nowplaying = await axios.get(apiKey);
        const movielist = Nowplaying.data.results;
        const Upcoming = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR');
        const upcominglist = Upcoming.data.results;
        res.status(200).json({movielist, upcominglist});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}

exports.Movie = async (req, res) => {
    try {
        const id = req.params.id;

        const Detailresponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
        const moviedetail = Detailresponse.data;
        const Imgresponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
        const movieimage = Imgresponse.data.posters;
        const Videoresponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`);
        const movievideo = Videoresponse.data.results;
        const Creditresponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`);
        const moviecredit = Creditresponse.data.crew;
        const moviecredits = Creditresponse.data.cast;
        res.status(200).json({moviedetail, movieimage, movievideo, moviecredit, moviecredits});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    }
}