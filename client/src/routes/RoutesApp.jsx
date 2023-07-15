import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from '../pages/dashboard/Home/Home';
import { NavBarApp } from '../components/NavbarApp/NavBarApp';
import { Login } from '../pages/auth/Login/Login';
import { Register } from '../pages/auth/Register/Register';
import { User } from '../pages/users/User/User';
import { UserEdition } from '../pages/users/UserEdition/UserEdition';
import { AllBooks } from '../pages/dashboard/AllBooks/AllBooks';
import { Bookshelf } from '../pages/books/Bookshelf/Bookshelf';
import { ReadBooks } from '../components/Bookshelves/ReadBooks';
import { BooksToRead } from '../components/Bookshelves/BooksToRead';
import { ReadingBooks } from '../components/Bookshelves/ReadingBooks';
import { WishList } from '../pages/books/WishList/WishList';
import { Friends } from '../pages/users/Friends/Friends';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <NavBarApp/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/userEdition" element={<UserEdition/>}/>
            <Route path="/allBooks" element={<AllBooks/>}/>
            <Route path="/bookshelf" element={<Bookshelf/>}>

                <Route path="read" element={<ReadBooks/>}/>
                <Route path="toRead" element={<BooksToRead/>}/>
                <Route path="reading" element={<ReadingBooks/>}/>
            </Route>
            <Route path="/wishlist" element={<WishList/>}/>
            <Route path="/myFriends" element={<Friends/>}/>
            <Route path="/myFriends" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}
