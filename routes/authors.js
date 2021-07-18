const express = require("express");
const router = express.Router();
const Author = require("../models/author.js");

//All authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

//new author route
router.get("/new", (req, res) => {
  res.render("authors/new.ejs", { author: new Author() });
});

//create author route
router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
