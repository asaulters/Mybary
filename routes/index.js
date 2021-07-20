const express = require("express");
const router = express.Router();
const Book = ('../models/book')

router.get("/", async (req, res) => {
  let books;
  try{
    books = await find().sort({createAt: 'desc'}).limit(10).exec();
  } catch {
    books = []
  }
  res.render("index", {books: books});
});

module.exports = router;
