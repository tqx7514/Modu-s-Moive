const express = require('express');
const { postSchedule, deleteSchedule } = require('../../controllers/admin/adminschedule');

const router = express.Router();

router.post("/post", postSchedule);

router.post("/delete", deleteSchedule);

module.exports = router;