const {Op} = require("sequelize");
const { users } = require("../../models");

exports.UserList = async (req, res) => {
  const category = req.query.category;
  const page = req.params.page;
  if (page < 1) {
    res.status(400);
    return;
  }
  const limit = 10;
  const offset = (page - 1) * limit;
  const where = {};

  if (category === "2") {
    where.answer = {
      [Op.ne]: "", // answer 칼럼의 값이 ""이 아닌 것만 찾음
    };
  } else if (category === "3") {
    where.answer = {
      [Op.eq]: "", // answer 칼럼의 값이 ""인 것만 찾음
    };
  }

  try {
    const userlist = await users.findAndCountAll({
      where, // 위에서 설정한 조건을 where에 적용
      limit,
      offset,
      order: [["grade", "DESC"]],
    });
    
    const {rows: userlists, count } = userlist;
    const lastPage = count ? Math.ceil(count / limit) : 1;
    res.json({userlists, count, lastPage})
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.UserDel = async (req, res) => {
  const { id } = req.query;
  console.log("id=>", id);
  try {
    const userdel = await users.destroy({
      where: { id },
    });
    if (userdel === 0) {
      res.status(404).json({ message: "회원이 존재하지 않습니다" });
      return;
    }
    const userlist = await users.findAll({});
    res.status(200).json(userlist);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.UserGrade = async (req, res) => {
  const {grade} = req.body;
  try{
    const gradeupdate = await users.update({
      grade,
    });
    if(!gradeupdate) {
      res.status(404).json("message: 실패!");
    }
    const userlist = await users.findAll({
    });
    res.status(200).json(userlist);
  } catch (error) {
    res.staus(500).json(error);
  }
};
