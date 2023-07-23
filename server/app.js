const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');

const usersRouter = require("./routes/users")
const booksRouter = require("./routes/books")

const app = express();

app.use(
    cors({
      origin: "*"
    })
  )

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/books", booksRouter);


module.exports = app;
