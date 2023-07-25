const connection = require("../config/db");

class bookController {
  addBookToRead = (req, res) => {
    const {
      to_read_date,
      is_read_date,
      wishlist_date,
      added_reading_date,
      title,
      genre,
      pages_number,
      publish_year,
      isbn,
      sinopsis,
      author_name,
      cover_img,
    } = req.body;

    const { user_id } = req.params;

    // Check if the author already exists in the "author" table
    const sqlCheckAuthor = `SELECT * FROM author WHERE author_name = "${author_name}"`;
    connection.query(sqlCheckAuthor, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Error checking author." });
      }

      if (results.length > 0) {
        // The author already exists in the "author" table
        const authorId = results[0].author_id;
        insertBook(authorId);
      } else {
        // The author does not exist in the "author" table, insert it and continue with the process.
        const sqlAuthor = `INSERT INTO author (author_name) VALUES ("${author_name}")`;
        connection.query(sqlAuthor, (error, results) => {
          if (error) {
            console.log(error);
            return res
              .status(500)
              .json({ message: "Error inserting the author." });
          }
          const authorId = results.insertId;
          insertBook(authorId);
        });
      }
    });

    function insertBook(authorId) {
      // Insert the book into the "book" table using the "authorId"
      const sqlBook = `INSERT INTO book (author_id, title, genre, pages_number, publish_year, isbn, sinopsis, cover_img) VALUES (${authorId}, "${title}", "${genre}", ${pages_number}, ${publish_year}, "${isbn}", "${sinopsis}", "${cover_img}")`;

      connection.query(sqlBook, (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Error inserting the book." });
        }

        const bookId = results.insertId;

        // Insert the information into the "user_book" table using the "bookId"
        if (
          to_read_date ||
          is_read_date ||
          wishlist_date ||
          added_reading_date
        ) {
          let category;
          let dateValue;

          if (to_read_date) {
            category = "to_read_date";
            dateValue = to_read_date;
          } else if (is_read_date) {
            category = "is_read_date";
            dateValue = is_read_date;
          } else if (wishlist_date) {
            category = "wishlist_date";
            dateValue = wishlist_date;
          } else if (added_reading_date) {
            category = "added_reading_date";
            dateValue = added_reading_date;
          }

          const sqlUserBook = `INSERT INTO user_book (user_id, book_id, ${category}) VALUES (${user_id}, ${bookId}, "${dateValue}")`;
          connection.query(sqlUserBook, (error, results) => {
            if (error) {
              console.log(error);
              return res
                .status(500)
                .json({ message: "Error inserting into user_book." });
            }

            console.log("Successful insertions.");
            return res.status(200).json({ message: "Successful insertions." });
          });
        } else {
          console.log("Successful insertions.");
          return res.status(200).json({ message: "Successful insertions." });
        }
      });
    }
  };

  getAllMyBookshelves = (req, res) => {
    const { user_id } = req.params;
    console.log();
    let sql = `SELECT book_id, title, 'Read_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND is_read_date IS NOT NULL AND is_deleted = 0)
    
    UNION ALL
    
    SELECT book_id, title, 'To_Read_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND to_read_date IS NOT NULL AND is_deleted = 0)
    
    UNION ALL
    
    SELECT book_id, title, 'Reading_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND added_reading_date IS NOT NULL AND is_deleted = 0)
    
    UNION ALL
    
    SELECT book_id, title, 'Wish_Bookshelf' AS category
    FROM book
    WHERE book_id IN (SELECT book_id FROM user_book WHERE user_id = ${user_id} AND wishlist_date IS NOT NULL AND is_deleted = 0);
    ;`;

    connection.query(sql, (error, result) => {
      error ? res.status(500).json(error) : res.status(200).json(result);
    });
  };

  getOneBook = (req, res) => {
    const { book_id, user_id } = req.params;

    const sql = `SELECT * FROM user_book WHERE user_id = ${user_id} and book_id = ${book_id}`;

    connection.query(sql, (err, result) => {
      err ? res.status(500).json(err) : res.status(200).json(result);
    });
  };
}

module.exports = new bookController();
