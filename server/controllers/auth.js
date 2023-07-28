const bcrypt = require("bcrypt");
const { users, meetusers } = require("../models");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { id, name, email, password, tel, age, gender } = req.body;
  try {
    const exUser = await users.findOne({ where: { id } });
    if (exUser) {
      res.status(409).json("이미 있는 아이디입니다.");
      return;
    } else {
      const hash = await bcrypt.hash(password, 12);
      const newUser = await users.create({
        id,
        name,
        password: hash,
        email,
        tel,
        age,
        gender,
        grade: 0,
      });

      const accessToken = jwt.sign(
        {
          id: newUser.id,
          num: newUser.userNum,
          name: newUser.name,
          email: newUser.email,
          grade: newUser.grade,
          gender: newUser.gender,
          point: newUser.point,
          meet: [],
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "7d",
        }
      );
      res.cookie("accessToken", accessToken, {
        expires: new Date(Date.now() + 3600000),
        secure: false,
        httpOnly: true,
      });
      res.status(200).json({ accessToken });
      return;
    }
  } catch (error) {
    res.status(500).json(error);
  }
  next();
};

exports.login = async (req, res) => {
  const { id, password } = req.body;

  try {
    const newUserInfo = await meetusers.findAndCountAll({
      nest: true,
      where: { user_Id: id },
      attiributes: ["meet_meetNum"],
    });
    const meetArray = newUserInfo.rows.map((row) => row.meet_MeetNum);
    const meetNums = [...new Set(meetArray)];
    const userInfo = await users.findOne({ where: { id } });
    const hash = await bcrypt.compare(password, userInfo.password);

    if (!userInfo) {
      res.status(401).json("NOT Authorized");
    } else if (!hash) {
      res.status(401).json("비번틀림");
    } else {
      const accessToken = jwt.sign(
        {
          id: userInfo.id,
          num: userInfo.userNum,
          name: userInfo.name,
          email: userInfo.email,
          grade: userInfo.grade,
          gender: userInfo.gender,
          point: userInfo.point,
          meet: meetNums,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "1d",
        }
      );

      // token 쿠키로 전송
      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false,
        httpOnly: true,
      });
      res.status(200).json(accessToken);
      // console.log("dddddddddddddddddd", accessToken);
    }
  } catch (error) {
    res.status(500).json(error);
  }

  // next();
};

exports.logout = (req, res) => {
  res.clearCookie("accessToken");
  res.status(204).json("");
};

exports.check = (req, res) => {
  const user = req.cookies.accessToken;
  if (!user) {
    // 로그인 중이 아님
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  res.json(jwt.verify(user, process.env.ACCESS_SECRET));
};

exports.checkDuplicate = async (req, res, next) => {
  const { id } = req.body;
  console.log("ddddddddddddddddddd", id);
  try {
    const isDuplicate = await users.findOne({ where: { id } });
    res.json(isDuplicate);
  } catch (error) {
    next(error);
  }
};

exports.withdraw = async (req, res) => {
  const { id } = req.body;
  console.log("백 id", id);
  try {
    const deletedRows = await users.destroy({
      where: { id },
    });
    if (deletedRows === 0) {
      res.status(404).json({ msg: "회원이 존재하지않습니다" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.checkPW = async (req, res) => {
  const { id, password } = req.body;
  console.log("id,pw", id, password);
  try {
    const userInfo = await users.findOne({ where: { id } });
    const hash = await bcrypt.compare(password, userInfo.password);
    if (!hash) {
      res.status(401).json("비밀번호가 틀렸습니다");
    } else {
      res.status(200).json(userInfo);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateInfo = async (req, res) => {
  const { id, pw, email, tel, age, gender } = req.body;
  console.log(
    "id, pw, email, tel, age, gender",
    id,
    pw,
    email,
    tel,
    age,
    gender
  );
  console.log('pw === ""', pw === "");
  try {
    const updateData = {
      email,
      tel,
      age,
      gender,
    };
    if (pw !== "") {
      const hash = await bcrypt.hash(pw, 12);
      updateData.password = hash;
    }

    const [updatedRows] = await users.update(updateData, {
      where: { id },
    });

    const updatedUser = await users.findOne({
      where: { id },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
