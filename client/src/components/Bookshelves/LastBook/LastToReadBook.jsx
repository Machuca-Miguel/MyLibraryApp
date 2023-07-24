import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastToReadDateObject } from "../../../helpers/dates";
import { useNavigate } from "react-router-dom";

export const LastToReadBook = () => {
  const [lastBookToRead, setLastBookToRead] = useState();
  const navigate = useNavigate();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookToRead(getLastToReadDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);
console.log(lastBookToRead, "TOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
  return (
    <div className="toRead" onClick={() => navigate("/mybookshelf")}>
      <h5>Books to read</h5>
      <div className="coverCont">
        {lastBookToRead?.user_cover_img ? (
          <img src={`${lastBookToRead?.user_cover_img}`} alt="" />
        ) : (
          <img src={`https://covers.openlibrary.org/b/olid/${lastBookToRead?.book_cover_img}-L.jpg`} alt="" />
        )}
      </div>
      <div className="titleCont">
        <h6>{lastBookToRead?.title}</h6>
      </div>
    </div>
  );
};
