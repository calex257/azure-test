var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render("index", { title: "the greatest website on planet earth" });
    res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = router;
