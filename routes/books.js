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
    const authors = await Author.find({});
    const book = new Book();
    res.render("/books/new", {
      authors: authors,
      book: book,
    });
  } catch {
    res.redirect("/books");
    console.log("there has been a problem")
  }
});

//create book route
router.post("/", async (req, res) => {
  res.send("Create Book");
});

module.exports = router;
