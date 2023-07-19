const axios = require("axios");
const { moviecomments,users } = require("../models");

exports.List = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const Nowplaying = await axios.get(apiKey);
    const movielist = Nowplaying.data.results;
    const Upcoming = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR"
    );
    const upcominglist = Upcoming.data.results;
    res.status(200).json({ movielist, upcominglist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.Movie = async (req, res) => {
  try {
    const id = req.params.id;
    // const movieId = req.query.movie_id;
    console.log('무비아이디닷',id);

    const Detailresponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`
    );
    const moviedetail = Detailresponse.data;

    const Imgresponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    );
    const movieimage = Imgresponse.data.posters;

    const Videoresponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko`
    );
    const movievideo = Videoresponse.data.results;

    const Creditresponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR`
    );
    const moviecredit = Creditresponse.data.crew;
    const moviecredits = Creditresponse.data.cast;

    const commentlist = await moviecomments.findAll({
        where: {movie_id: id}
    });

    res
      .status(200)
      .json({
        moviedetail,
        movieimage,
        movievideo,
        moviecredit,
        moviecredits,
        commentlist,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.Comment = async (req, res) => {
  const { content, userId, movie_id, star } = req.body;
  console.log("Comment->", content, userId, movie_id, star);
  try {
    const comment = await moviecomments.create({
      content,
      id: userId,
      movie_id,
      star,
    });
    const point = await users.findOne({
      where:{id:userId}
    });
    point.point+=50;
    await point.save();

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.CommentDelete = async (req, res) => {
  const { commentNum,movie_id} = req.query;
  try{
    const deletecomment = await moviecomments.destroy({
      where: {mc_num: commentNum},
    });

    if (deletecomment === 0) {
      res.status(404).json({message: "관람평이 존재하지 않습니다"});
      return;
    }
    const commentlist = await moviecomments.findAll({
      where:{movie_id}
    })

    res.status(200).json({commentlist});
  } catch(error) {
    res.status(500).json(error);
  }
};
exports.CommentUpdate = async (req, res) => {
  const {commentNum, movie_id, editContent, rating} = req.body;
  console.log('백백백',commentNum,movie_id,editContent, rating);
  try{
    const [updatecomment] = await moviecomments.update(
      {
        content:editContent,
        star: rating,
      },
      {
        where: {mc_num:commentNum},
      }
    );
    if(updatecomment === 0) {
      res.status(404).json({msg: "관람평이 존재하지 않습니다"});
      return;
    }
    const commentlist = await moviecomments.findAll({
      where: {movie_id}
    });
    console.log('업데이트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ',commentlist);
    res.status(200).json({commentlist});
  } catch(error) {
    res.status(500).json(error);
  }
};
