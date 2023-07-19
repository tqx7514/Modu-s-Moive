const express = require("express");
const router = express.Router();
const { 
    getEvents,
    GetMovieEvents,
    GetPromoteEvents,
    GetOtherEvents,
    GetEventDetail,
    // adminEventList,
    // adminEventRead, 
    // adminEventBoardWrite,
    // adminEventBoardUpdate, 
    // adminEventBoardDelete  
} = require("../controllers/event");

// 이벤트 메인페이지

router.get("/", getEvents);
router.get("/movie/:eventNum", GetMovieEvents);
router.get("/promote/:eventNum", GetPromoteEvents);
router.get("/other/:eventNum", GetOtherEvents);
router.get("/:eventNum/view", GetEventDetail);

// 관리자 페이지

// router.get("/admin/event/", adminEventList);
// router.get("/admin/event/:eventNum", adminEventRead);
// router.post("/admin/event/write", adminEventBoardWrite);
// router.delete("/admin/event/:eventNum",adminEventBoardDelete);
// router.patch("/admin/event/:eventNum", adminEventBoardUpdate);


module.exports = router;