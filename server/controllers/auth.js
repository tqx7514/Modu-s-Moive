const bcrypt = require("bcrypt");
const { users } = require("../models");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { id, email, password } = req.body;
  try {
    const exUser = await users.findOne({ where: { id } });
    if (exUser) {
      res.status(409).json("이미 있는 아이디입니다.");
      return;
    } else {
      const hash = await bcrypt.hash(password, 12);
      const newUser = await users.create({
        id,
        password: hash,
        email,
      });

      const accessToken = jwt.sign(
        {
          id: newUser.id,
          email: newUser.email,
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
      res.status(200).json({ msg: "가입성공", accessToken });
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
    const userInfo = await users.findOne({ where: { id } });
    console.log("000000000000000000000000");
    const hash = await bcrypt.compare(password, userInfo.password);
    console.log("000000000000000000000001");

    // console.log("111111111111111111111111111111", hash);
    if (!userInfo) {
      res.status(401).json("NOT Authorized");
      console.log("000000000000000000000002");
    } else if (!hash) {
      res.status(401).json("비번틀림");
      console.log("000000000000000000000003");
    } else {
      const accessToken = jwt.sign(
        {
          id: userInfo.id,
          email: userInfo.email,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "1d",
        }
      );
      console.log("000000000000000000000004");

      // console.log("accessToken =====>", accessToken);
      // token 쿠키로 전송
      res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false,
        httpOnly: true,
      });
      console.log("000000000000000000000005");

      res.status(200).json(accessToken);
      console.log("000000000000000000000006");
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
  // const user = jwt.verify(req.cookies.accessToken, process.env.ACCESS_SECRET);
  const user = req.cookies.accessToken;
  console.log("000000000000000000000007");

  // const user = 1;
  if (!user) {
    // 로그인 중이 아님
    res.status(401).json({ error: "Unauthorized" });
    console.log("000000000000000000000008");
    return;
  }
  console.log("000000000000000000000009");

  res.json(jwt.verify(user, process.env.ACCESS_SECRET));
};
