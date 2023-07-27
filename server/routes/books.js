const express = require("express");
const router = express.Router();
const booksControllers = require("../controllers/bookControllers")
const multerSingle = require("../middleware/multerSingle");

//1.-Add book to Read Bookshelf
//http://localhost:4000/books/addBook/myBookshelf/:user_id
router.post("/addBook/myBookshelf/:user_id", booksControllers.addBookToBookshelf);

//2.-Get all bookshelves and titles from a User Bookshelves
//http://localhost:4000/books/allMyBookshelves/:user_id
router.get("/allMyBookshelves/:user_id", booksControllers.getAllMyBookshelves);

//3.-Get onebook from a User Bookshelf
//http://localhost:4000/books/allMyBookshelves/oneBook/:book_id/:user_id
router.get("/allMyBookshelves/oneBookEdition/:book_id/:user_id", booksControllers.getOneBook);

//4.-Modify info to o Book from user bookshelf
//http://localhost:4000/books/myBookshelf/updateBookInfo/:book_id/:user_id
router.put("/myBookshelf/updateBookInfo/:book_id/:author_id/:user_id", multerSingle("book_cover"), booksControllers.updateBookInfo)

//5.-Delete users Book cover
//http://localhost:4000/books/myBookshelf/deleteCover/:book_id/:user_id
router.put("/myBookshelf/deleteCover/:book_id/:user_id", booksControllers.deleteuserBookCover)


module.exports = router;