var express = require("express");

var router = express.Router();

router.use("/", require("./home")); //refers to routes/web/home.js

module.exports = router;