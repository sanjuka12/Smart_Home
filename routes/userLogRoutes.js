const express = require("express");
const router = express.Router();
const { addUserLog } = require("../controllers/userLogController");

router.post("/userlog", addUserLog);

module.exports = router;
