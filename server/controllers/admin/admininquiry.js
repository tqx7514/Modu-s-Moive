const { meets, posts, inquirys } = require("../../models");

exports.inquiryList = async (req, res) => {
  console.log("ssss");
  console.log("백 관리자 문의리스트, page==", req.query.page);
};
