CREATE DATABASE myLibrary;

USE myLibrary;
-- DROP DATABASE myLibrary;

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
    is_deleted BOOLEAN DEFAULT FALSE
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
    user_id INT UNSIGNED,
    author_id INT UNSIGNED,
    title VARCHAR(50) NOT NULL,
    genre VARCHAR(50),
    format VARCHAR(50),
    cover_img VARCHAR(200),
    pages_number TINYINT,
    current_page TINYINT,
    publish_year SMALLINT,
    isbn INT,
    sinopsis VARCHAR(200),
    is_deleted BOOLEAN DEFAULT FALSE,
    is_read BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES user (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_author_id FOREIGN KEY (author_id)
        REFERENCES author (author_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE rating (
    rating_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNSIGNED,
    book_id INT UNSIGNED,
    rating DECIMAL(5),
    mood VARCHAR(5),
    CONSTRAINT fk_rating_user_id FOREIGN KEY (user_id)
        REFERENCES user (user_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_rating_book_id FOREIGN KEY (book_id)
        REFERENCES book (book_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);