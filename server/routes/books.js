const express = require("express");
const router = express.Router();
const booksControllers = require("../controllers/bookControllers")
const multerSingle = require("../middleware/multerSingle");

//1.-Add book to Read Bookshelf
//http://localhost:4000/books/addBook/myBookshelf/:user_id
router. post("/addBook/myBookshelf/:user_id", booksControllers.addBookToRead);

module.exports = router;