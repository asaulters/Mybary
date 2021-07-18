const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");
const Author = require("../models/author.js");

//All books route
router.get("/", async (req, res) => {
  res.send("All Books");
});

//new book route
router.get("/new", async (req, res) => {
  try {
    const author = await Author.find({});
    const book = new Book();
    res.render("/books/new", {
      authors: authors,
      book: book,
    });
  } catch {
    res.redirect("/books");
  }
});

//create book route
router.post("/", async (req, res) => {
  res.send("Create Book");
});

module.exports = router;
