import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/dashboard/Home/Home";
import { NavBarApp } from "../components/NavbarApp/NavBarApp";
import { Login } from "../pages/auth/Login/Login";
import { Register } from "../pages/auth/Register/Register";
import { User } from "../pages/users/User/User";
import { UserEdition } from "../pages/users/UserEdition/UserEdition";
import { AllBooks } from "../pages/dashboard/AllBooks/AllBooks";
import { OneBook } from "../pages/dashboard/AllBooks/OneBook/OneBook";
import { Bookshelf } from "../pages/books/Bookshelf/Bookshelf";
import { ReadBooks } from "../components/Bookshelves/ReadBooks";
import { BooksToRead } from "../components/Bookshelves/BooksToRead";
import { ReadingBooks } from "../components/Bookshelves/ReadingBooks";
import { WishList } from "../pages/books/WishList/WishList";
import { Friends } from "../pages/users/Friends/Friends";
import { OneFriend } from "../pages/users/OneFriend/OneFriend";
import { Admin } from "../pages/Admin/Admin/Admin";
import { AdminAuthors } from "../pages/Admin/AdminAuthors/AdminAuthors/AdminAuthors";
import { AuthorEdition } from "../pages/Admin/AdminAuthors/AuthorEdition/AuthorEdition";
import { AuthorRegister } from "../pages/Admin/AdminAuthors/AuthorRegister/AuthorRegister";
import { AdminBooks } from "../pages/Admin/AdminBooks/AdminBooks/AdminBooks";

import { AdminStats } from "../pages/Admin/Adminstats/AdminStats";
import { AdminUser } from "../pages/Admin/AdminUsers/AdminUser";
import { MyBookshelf } from "../pages/books/Bookshelf/MyBookshelf/MyBookshelf";
import { UserOneBook } from "../pages/books/Bookshelf/UserOneBook/UserOneBook";
import { BookRegister } from "../pages/Admin/AdminBooks/BookRegister/BookRegister";
import { BookEdition } from "../pages/Admin/AdminBooks/BookEdition/BookEdition";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/userEdition/:user_id" element={<UserEdition />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/allBooks/oneBook/:type/:olid" element={<OneBook />} />

        <Route
          path="/userBooks/oneBookEdition/:book_id/:user_id"
          element={<UserOneBook />}
        />
        <Route path="/bookshelf" element={<Bookshelf />} />

        <Route path="/mybookshelf" element={<MyBookshelf />} />
        <Route path="/mybookshelf/read" element={<ReadBooks />} />
        <Route path="/mybookshelf/toRead" element={<BooksToRead />} />
        <Route path="/mybookshelf/reading" element={<ReadingBooks />} />
        <Route path="/mybookshelf/wishlist" element={<WishList />} />

        <Route path="/myFriends" element={<Friends />} />
        <Route path="/oneFriend/:friend_id" element={<OneFriend />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/adminAuthors" element={<AdminAuthors />} />
        <Route path="/adminAuthorRegister" element={<AuthorRegister />} />
        <Route path="/adminAuthorEdition" element={<AuthorEdition />} />

        <Route path="/adminBooks" element={<AdminBooks />} />
        <Route path="/adminBookRegister" element={<BookRegister />} />
        <Route path="/adminBookEdition" element={<BookEdition />} />

        <Route path="/adminStats" element={<AdminStats />} />
        <Route path="/adminUsers" element={<AdminUser />} />
      </Routes>
    </BrowserRouter>
  );
};
