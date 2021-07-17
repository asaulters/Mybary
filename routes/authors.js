const express = require("express");
const router = express.Router();

//All authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

//new author route
router.get("/new", (req, res) => {
  res.render("authors/index");
});

//create author route
router.post("/", (req, res) => {
  res.render("Create");
});

module.exports = router;
