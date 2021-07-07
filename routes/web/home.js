var express = require("express");

var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("home/");
});

router.get("/home", function(req, res, next) {
    res.render("home/home");
});

module.exports = router;