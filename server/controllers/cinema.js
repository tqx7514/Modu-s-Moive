const { regions, cinemas, mycinema } = require("../models");

exports.Cinema = async (req, res) => {
  try {
    const cinema = await cinemas.findAll({});
    res.status(200).json(cinema);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.Region = async (req, res) => {
  try {
    const region = await regions.findAll({});
    res.status(200).json(region);
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.MyCinema = async (req, res) => {
  const { selectedCinema, selectedAddrDetail, user } = req.body;
  console.log("sssssssssssssssssss", selectedCinema, user);
  try {
    const mycinemas = await mycinema.create({
      addr: selectedCinema,
      id: user,
      addr_detail: selectedAddrDetail,
    });
    res.status(200).json(mycinemas);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.viewCinema = async (req, res) => {
  try {
    const viewcinema = await mycinema.findAll({});
    res.status(200).json(viewcinema);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.MyCinemaDel = async (req, res) => {
  const { selectedCinema, cinemaId } = req.query;
  try {
    const mycinemaDel = await mycinema.destroy({
      where: { addr: selectedCinema, id: cinemaId },
    });
    if (mycinemaDel === 0) {
      res.status(404).json({ message: "관람평이 존재하지 않습니다" });
      return;
    }
    const cinema = await cinemas.findAll({});

    res.status(200).json({ cinema });
  } catch (error) {
    res.status(500).json(error);
  }
};
