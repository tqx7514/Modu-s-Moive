const { events } = require("../models");

exports.getEvents = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const event = await events.findAll({});
    
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetMovieEvents = async (req, res) => {
  const eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetPromoteEvents = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetOtherEvents = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.GetEventDetail = async (req, res) => {
  eventNum = req.params.eventNum;
  try {
    const eventDetail = await events.findOne({
      where: { eventNum },
    });
    
    eventDetail.view += 1;
    await eventDetail.save();

    res.status(200).json(eventDetail);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// exports.adminEventBoardWrite = async (req, res, next) => {
//   const {
//     categoryId,
//     userId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   } = req.body;
//   try {
//     const newAdminEventWrite = await events.create({
//       categoryId,
//       userId,
//       eventTitle,
//       eventContent,
//       eventImg,
//       startEventDate,
//       endEventDate,
//     });
//     console.log("adminEventBoardWrite", newAdminEventWrite);
//     res.status(200).json(newAdminEventWrite);
//   } catch (error) {
//     res.status(500).json(error);
//     next(error);
//   }
// };

// exports.adminEventRead = async (req, res, next) => {
//   const eventNum = req.params.eventNum;
//   const event = await events.findOne({
//     where: { eventNum },
//   });
//   if (!event) {
//     res.status(404).json({ message: "게시글이 존재하지 않습니다." });
//   }
//   res.json({ event });
// };

// exports.adminEventList = async (req, res) => {
//   const page = parseInt(req.query.page || "1", 10);
//   if (page < 1) {
//     res.status(400);
//     return;
//   }

//   const where = {};
//   console.log("where입니다", where);

//   const limit = 12;
//   const offset = (page - 1) * limit;
//   try {
//     console.log("adminEventListPage", page);
//     const event = await events.findAll({
//       nest: true,
//       where,
//       order: [["createdAt", "DESC"]],
//       limit,
//       offset,
//     });

//     const totalCount = await events.count({ where });
//     const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;

//     res.json({
//       event,
//       totalPages,
//     });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// exports.adminEventBoardUpdate = async (req, res, next) => {
//   const {
//     eventNum,
//     categoryId,
//     eventTitle,
//     eventContent,
//     eventImg,
//     startEventDate,
//     endEventDate,
//   } = req.body;

//   try {
//     const [updateEventRows] = await events.update(
//       {
//         categoryId,
//         eventTitle,
//         eventContent,
//         eventImg,
//         startEventDate,
//         endEventDate,
//       },
//       {
//         where: { eventNum },
//       }
//     );

//     if (updateEventRows === 0) {
//       res.status(404).json({ message: "게시물이 존재하지 않습니다." });
//       return;
//     }

//     const updatedEvent = await events.findOne({
//       where: { eventNum },
//     });

//     res.json(updatedEvent);
//   } catch (error) {
//     res.status(500).json(error);
//     next(error);
//   }
// };

// exports.adminEventBoardDelete = async (req, res, next) => {
//   const eventNum = req.params.eventNum;

//   try {
//     const deletedEventRows = await events.destroy({
//       where: { eventNum },
//     });

//     if (deletedEventRows === 0) {
//       res.status(404).json({ message: "게시글이 존재하지 않습니다." });
//       return;
//     }

//     res.status(204).end();
//   } catch (error) {
//     res.status(500).json(error);
//     next(error);
//   }
// };
