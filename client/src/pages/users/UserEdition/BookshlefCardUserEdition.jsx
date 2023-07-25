import axios from "axios";
import React, { useEffect, useState } from "react";

import { BookselfList } from "./BookselfList";

export const BookshlefCardUserEdition = ({ user_id }) => {
  const [bookShelvesData, setBookShelvesData] = useState();
  const [showTitles, setShowTitles] = useState(0);
  

  const [counter1, setCounter1] = useState()
  const [counter2, setCounter2] = useState()
  const [counter3, setCounter3] = useState()
  const [counter4, setCounter4] = useState()
  useEffect(() => {
    console.log(user_id);
    if (user_id) {
      axios
        .get(`http://localhost:4000/books/allMyBookshelves/${user_id}`)
        .then((res) => {
          setBookShelvesData(res.data);
          console.log(res.data, "aaaaaaaaaaaaaaaaaaaaaa");
        })
        .catch((err) => console.log(err));
    }
    return () => {};
  }, [user_id]);


  

  return (
    <div className="bookshelfCard">
      <h3>My Bookshelves</h3>
      <hr />
      <div className="contentCont">
        <BookselfList  categoryTitle="Read Bookshelf" showTitles={showTitles} setShowTitles={setShowTitles} bookShelvesData={bookShelvesData} categ={"Read_Bookshelf"} titNum={1} counter={counter1} setCounter={setCounter1} user_id={user_id}/>

        <BookselfList categoryTitle="Reading Bookshelf" showTitles={showTitles} setShowTitles={setShowTitles} bookShelvesData={bookShelvesData} categ={"Reading_Bookshelf"} titNum={2} counter={counter2} setCounter={setCounter2} user_id={user_id}/>

        <BookselfList categoryTitle="Bookshelf to Read" showTitles={showTitles} setShowTitles={setShowTitles} bookShelvesData={bookShelvesData} categ={"To_Read_Bookshelf"} titNum={3} counter={counter3} setCounter={setCounter3} user_id={user_id}/>

        <BookselfList categoryTitle="Wished Bookshelf" showTitles={showTitles} setShowTitles={setShowTitles} bookShelvesData={bookShelvesData} categ={"Wish_Bookshelf"} titNum={4} counter={counter4} setCounter={setCounter4} user_id={user_id}/>
       
        
      </div>
    </div>
  );
};
