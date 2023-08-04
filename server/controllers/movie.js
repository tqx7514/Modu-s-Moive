const axios = require("axios");
const { moviecomments, users, movies, movieLike } = require("../models");

exports.List = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const Nowplaying = await axios.get(apiKey);
    const movielist = Nowplaying.data.results;
    const Upcoming = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR"
    );
    const upcominglist = Upcoming.data.results;
    const currentmovielist = await movies.findAll({});
    
    res.status(200).json({ movielist, upcominglist, currentmovielist });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.MovieList = async (req, res) => {
  try {
    const currentmovielist = await movies.findAll({});
    const Upcoming = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c4e59022826dc465ea5620d6adaa6813&language=ko&page=1&region=KR"
    );
    const upcominglist = Upcoming.data.results;
    res.status(200).json({ currentmovielist, upcominglist });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.Movie = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("무비아이디닷", id);

    const Detailresponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c4e59022826dc465ea5620d6adaa6813&append_to_response=videos,images,credits&language=ko`
    );
    const moviedetail = Detailresponse.data;

    const commentlist = await moviecomments.findAll({
      where: { movie_id: id },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      moviedetail,
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
      where: { id: userId },
    });
    point.point += 50;
    await point.save();

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.CommentDelete = async (req, res) => {
  const { commentNum, movie_id } = req.query;
  try {
    const deletecomment = await moviecomments.destroy({
      where: { mc_num: commentNum },
    });

    if (deletecomment === 0) {
      res.status(404).json({ message: "관람평이 존재하지 않습니다" });
      return;
    }
    const commentlist = await moviecomments.findAll({
      where: { movie_id },
    });

    res.status(200).json({ commentlist });
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.CommentUpdate = async (req, res) => {
  const { commentNum, movie_id, editContent, rating } = req.body;
  console.log("백백백", commentNum, movie_id, editContent, rating);
  try {
    const [updatecomment] = await moviecomments.update(
      {
        content: editContent,
        star: rating,
      },
      {
        where: { mc_num: commentNum },
      }
    );
    if (updatecomment === 0) {
      res.status(404).json({ msg: "관람평이 존재하지 않습니다" });
      return;
    }
    const commentlist = await moviecomments.findAll({
      where: { movie_id },
    });
    console.log("업데이트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ", commentlist);
    res.status(200).json({ commentlist });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.AdminMovielist = async (req, res) => {
  try {
    const { title, vote_count, vote_average, popularity, id, poster_path, selectedValue } =
      req.body;

    // 데이터베이스에 영화 정보 삽입
    const insertedMovie = await movies.create({
      movie_name: title,
      tiketing: vote_count,
      star: vote_average,
      popularity: popularity,
      movie_id: id,
      img: poster_path,
      age: selectedValue,
    });

    res
      .status(200)
      .json({ message: "Movie information added successfully", insertedMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.AdminRemove = async (req, res) => {
  const { movie_num } = req.query;
  try {
    const deletecomment = await movies.destroy({
      where: { movie_num },
    });

    if (deletecomment === 0) {
      res.status(404).json({ message: "영화가 존재하지 않습니다"});
      return;
    }
    const currentmovielist = await movies.findAll({
      where: {movie_num}
    });

    res.status(200).json({ currentmovielist });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.DetailLike = async (req, res) => {
  console.log("like=========>", req.body);
  const {mc_num, userid} = req.body;
  try{
    const Detaillike = await movieLike.create(
      {
        mc_num: mc_num,
        id: userid,
      }
    );
    res.status(200).json({Detaillike});
  } catch(error) {
    res.status(500).json(error);
  }
}

exports.LikeDel = async (req, res) => {
  const {mc_num, userid} = req.query;
  try{
    const likeDel = await movieLike.destroy({
      where: {
        mc_num,
        id: userid}
    });

    const movielike = movieLike.findAll({
    })
    res.status(200).json(movielike);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.Like = async (req, res) => {
  try{
    const like = await movieLike.findAll({});
    res.status(200).json(like);
  } catch (error) {
    res.status(500).json(error);
  }
}