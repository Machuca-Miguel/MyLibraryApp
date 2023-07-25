const express = require("express");
const router = express.Router();
const booksControllers = require("../controllers/bookControllers")
const multerSingle = require("../middleware/multerSingle");

//1.-Add book to Read Bookshelf
//http://localhost:4000/books/addBook/myBookshelf/:user_id
router.post("/addBook/myBookshelf/:user_id", booksControllers.addBookToRead);

//2.-Get all bookshelves titles from a User Bookshelves
//http://localhost:4000/books/allMyBookshelves/:user_id
router.get("/allMyBookshelves/:user_id", booksControllers.getAllMyBookshelves);

//3.-Get all bookshelves titles from a User Bookshelves
//http://localhost:4000/books//allMyBookshelves/oneBook/:book_id
router.get("/allMyBookshelves/oneBook/:book_id", booksControllers.getOneBook);


module.exports = router;