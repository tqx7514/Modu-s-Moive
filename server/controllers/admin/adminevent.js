// const { Op } = require("sequelize");
// const { events, users } = require("../../models");

// exports.adminEventWrite = async (req, res, next) => {
//     const {
//       categoryId,
//       userId,
//       eventTitle,
//       eventContent,
//       eventImg,
//       startEventDate,
//       endEventDate,
//     } = req.body;

//     if (!eventTitle || !eventContent) {
//       res
//       .status(400)
//       .json({ message: "제목과 내용를 입력해주세요."})
//     }
//     try {
//       const newAdminEventWrite = await events.create({
//         categoryId,
//         userId,
//         eventTitle,
//         eventContent,
//         eventImg,
//         startEventDate,
//         endEventDate,
//       });
//       console.log("adminEventWrite", newAdminEventWrite);
//       res.status(200).json(newAdminEventWrite);
//     } catch (error) {
//       res.status(500).json(error);
//       next(error);
//     }
//   };
  
//   exports.adminEventRead = async (req, res, next) => {
//     const eventNum = req.params.eventNum;
//     const event = await events.findOne({
//       where: { eventNum },
//     });
//     if (!event) {
//       res.status(404).json({ message: "게시글이 존재하지 않습니다." });
//     }
//     res.json(event);
//     console.log("adminEventRead", event);
//   };
  
//   exports.adminEventList = async (req, res) => {
//     const page = parseInt(req.query.page || "1", 10);
//     if (page < 1) {
//       res.status(400);
//       return;
//     }
    
//     const { eventTitle } = req.query;
//     const where = {};
//     console.log("where입니다", where);

//     if (eventTitle) {
//       where.eventTitle = {
//         [Op.like]: `%${eventTitle}%`,
//       };
//     }
  
//     const limit = 12;
//     const offset = (page - 1) * limit;
//     try {
//       console.log("adminEventListPage", page);
//       const admineventlists = await events.findAll({
//         where,
//         order: [["createdAt", "DESC"]],
//         limit,
//         offset,
//       });
  
//       const totalCount = await events.count({ where });
//       const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;
  
//       res.json({
//         admineventlists,
//         totalPages,
//       });
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };
  
//   exports.adminEventUpdate = async (req, res, next) => {
//     const {
//       eventNum,
//       categoryId,
//       eventTitle,
//       eventContent,
//       eventImg,
//       startEventDate,
//       endEventDate,
//     } = req.body;
  
//     try {
//       const [updateEventRows] = await events.update(
//         {
//           categoryId,
//           eventTitle,
//           eventContent,
//           eventImg,
//           startEventDate,
//           endEventDate,
//         },
//         {
//           where: { eventNum },
//         }
//       );
  
//       if (updateEventRows === 0) {
//         res.status(404).json({ message: "이벤트가 존재하지 않습니다." });
//         return;
//       }
  
//       const updatedEvent = await events.findOne({
//         where: { eventNum },
//       });
  
//       res.json(updatedEvent);
//     } catch (error) {
//       res.status(500).json(error);
//       next(error);
//     }
//   };
  
//   exports.adminEventDelete = async (req, res, next) => {
//     const eventNum = req.params.eventNum;
  
//     try {
//       const deletedEventRows = await events.destroy({
//         where: { eventNum },
//       });
  
//       if (deletedEventRows === 0) {
//         res.status(404).json({ message: "이벤트가 존재하지 않습니다." });
//         return;
//       }
  
//       res.status(204).end();
//     } catch (error) {
//       res.status(500).json(error);
//       next(error);
//     }
//   };
  