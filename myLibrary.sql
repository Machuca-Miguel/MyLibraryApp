CREATE DATABASE my_library;

USE my_library;
-- DROP DATABASE my_library;


SELECT * FROM user;
SELECT * FROM user_book;
SELECT * FROM book;
SELECT * FROM author;

CREATE TABLE user (
    user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50),
    name VARCHAR(50),
    last_name VARCHAR(100),
    age TINYINT,
    profile_img VARCHAR(200),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    type TINYINT DEFAULT 0,
    is_deleted BOOLEAN DEFAULT FALSE,
    biography VARCHAR(150)
);

CREATE TABLE author (
    author_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(50),
    author_last_name VARCHAR(100),
    writing_genre VARCHAR(50),
    is_deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE book (
    book_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_id INT UNSIGNED,
    title VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    format VARCHAR(50),
    pages_number INT UNSIGNED,
    publish_year SMALLINT,
    isbn BIGINT UNSIGNED,
    sinopsis VARCHAR(200),
    is_deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE user_book (
    user_id INT UNSIGNED,
    book_id INT UNSIGNED,
    is_read_date DATE DEFAULT null,
    to_read_date DATE DEFAULT null,
    added_reading_date DATE DEFAULT null,
    wishlist_date DATE DEFAULT null,
    current_page INT UNSIGNED,
    format VARCHAR(50),
    rating DECIMAL(3,2),
    mood VARCHAR(20),
    comments VARCHAR(200),
    cover_img VARCHAR(200),
    PRIMARY KEY (user_id, book_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE friendship (
    friendship_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id_1 INT UNSIGNED,
    user_id_2 INT UNSIGNED,
    CONSTRAINT fk_friendship_user_id_1 FOREIGN KEY (user_id_1)
        REFERENCES user (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_friendship_user_id_2 FOREIGN KEY (user_id_2)
        REFERENCES user (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Inserciones en la tabla user
INSERT INTO user (user_name, name, last_name, age, profile_img, email, password, biography)
VALUES 
    ('user1', 'John', 'Doe', 25, 'profile1.jpg', 'user1@example.com', 'password1', 'Biography1'),
    ('user2', 'Jane', 'Smith', 30, 'profile2.jpg', 'user2@example.com', 'password2', 'Biography2'),
    ('user3', 'Michael', 'Johnson', 35, 'profile3.jpg', 'user3@example.com', 'password3', 'Biography3'),
    ('user4', 'Emily', 'Brown', 28, 'profile4.jpg', 'user4@example.com', 'password4', 'Biography4'),
    ('user5', 'David', 'Wilson', 32, 'profile5.jpg', 'user5@example.com', 'password5', 'Biography5'),
    ('user6', 'Sarah', 'Anderson', 29, 'profile6.jpg', 'user6@example.com', 'password6', 'Biography6'),
    ('user7', 'Michael', 'Taylor', 31, 'profile7.jpg', 'user7@example.com', 'password7', 'Biography7'),
    ('user8', 'Emma', 'Clark', 27, 'profile8.jpg', 'user8@example.com', 'password8', 'Biography8'),
    ('user9', 'Daniel', 'Thomas', 33, 'profile9.jpg', 'user9@example.com', 'password9', 'Biography9'),
    ('user10', 'Olivia', 'Walker', 26, 'profile10.jpg', 'user10@example.com', 'password10', 'Biography10');

-- Inserciones en la tabla author
INSERT INTO author (author_name, author_last_name, writing_genre)
VALUES
    ('Author1', 'Johnson', 'Fiction'),
    ('Author2', 'Smith', 'Mystery'),
    ('Author3', 'Davis', 'Romance'),
    ('Author4', 'Wilson', 'Science Fiction'),
    ('Author5', 'Brown', 'Thriller'),
    ('Author6', 'Anderson', 'Fantasy');

-- Inserciones en la tabla book
INSERT INTO book (author_id, title, genre, format, pages_number, publish_year, isbn, sinopsis)
VALUES
    (1, 'Book1', 'Fiction', 'Paperback', 200, 2020, 1234567890, 'Sinopsis1'),
    (2, 'Book2', 'Mystery', 'Hardcover', 300, 2019, 9876543210, 'Sinopsis2'),
    (3, 'Book3', 'Romance', 'E-book', 250, 2018, 1357924680, 'Sinopsis3'),
    (4, 'Book4', 'Science Fiction', 'Paperback', 350, 2017, 2468135790, 'Sinopsis4'),
    (5, 'Book5', 'Thriller', 'Hardcover', 400, 2016, 3698521470, 'Sinopsis5'),
    (6, 'Book6', 'Fantasy', 'E-book', 300, 2021, 9753102468, 'Sinopsis6'),
    (7, 'Book7', 'Biography', 'Paperback', 250, 2022, 8642097531, 'Sinopsis7'),
    (8, 'Book8', 'Historical Fiction', 'Hardcover', 350, 2015, 7531986420, 'Sinopsis8'),
    (9, 'Book9', 'Self-Help', 'E-book', 200, 2014, 6420875319, 'Sinopsis9'),
    (10, 'Book10', 'Young Adult', 'Paperback', 400, 2013, 5319764208, 'Sinopsis10');

INSERT INTO user_book (user_id, book_id, is_read_date, added_reading_date, to_read_date, wishlist_date, current_page, format, rating, mood, comments)
VALUES
    (1, 1, '2023-06-01', '2023-06-02', NULL, '2023-07-15', 150, 'Paperback', 4.5, 'Happy', 'Comment1'),
    (2, 2, '2023-06-02', NULL, '2023-07-16', NULL, 250, 'Hardcover', 3.8, 'Excited', 'Comment2'),
    (3, 3, '2023-06-03', NULL, NULL, '2023-07-15', 200, 'E-book', 4.2, 'Inspired', 'Comment3'),
    (4, 4, NULL, '2023-07-15', '2023-07-16', NULL, 100, 'Paperback', NULL, NULL, 'Comment4'),
    (5, 5, '2023-06-05', NULL, '2023-07-15', NULL, 300, 'Hardcover', 4.7, 'Thrilled', 'Comment5'),
    (6, 6, NULL, '2023-07-16', NULL, NULL, 0, 'E-book', NULL, NULL, 'Comment6'),
    (7, 7, NULL, NULL, '2023-07-15', NULL, 0, 'Paperback', NULL, NULL, 'Comment7'),
    (8, 8, NULL, '2023-07-16', '2023-07-16', NULL, 0, 'Hardcover', NULL, NULL, 'Comment8'),
    (9, 9, '2023-06-09', NULL, NULL, NULL, 0, 'E-book', 3.9, 'Motivated', 'Comment9'),
    (10, 10, '2023-06-10', '2023-07-15', '2023-07-15', NULL, 0, 'Paperback', 4.4, 'Curious', 'Comment10');




INSERT INTO friendship (user_id_1, user_id_2)
VALUES
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (3, 4),
    (3, 5),
    (4, 6),
    (5, 6),
    (6, 7),
    (7, 8);




