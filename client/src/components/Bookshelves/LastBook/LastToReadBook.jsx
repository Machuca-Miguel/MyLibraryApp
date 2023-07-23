import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastToReadDateObject } from "../../../helpers/dates";
import { useNavigate } from "react-router-dom";

export const LastToReadBook = () => {
  const [lastBookToRead, setLastBookToRead] = useState();
  const navigate = useNavigate();

  //Context use
  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookToRead(getLastToReadDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);

  return (
    <div className="toRead" onClick={() => navigate("/mybookshelf")}>
      <h5>Books to read</h5>
      <div className="coverCont">
        {lastBookToRead?.user_cover_img ? (
          <img src={`${lastBookToRead?.user_cover_img}`} alt="" />
        ) : (
          <img src={`${lastBookToRead?.book_cover_img}`} alt="" />
        )}
      </div>
      <div className="titleCont">
        <h6>{lastBookToRead?.title}</h6>
      </div>
    </div>
  );
};
