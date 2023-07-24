import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastIsReadDateObject } from "../../../helpers/dates";
import { useNavigate } from "react-router-dom";

export const LastReadBook = () => {
  const [lastBookRead, setLastBookRead] = useState();
  const navigate = useNavigate();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookRead(getLastIsReadDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);
  console.log(lastBookRead, "reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeead");

  return (
    <div className="readBook"  onClick={() => navigate("/mybookshelf")}>
      <h5>Read Books</h5>
      <div className="coverCont">
        {lastBookRead?.user_cover_img ? (
          <img src={`${lastBookRead?.user_cover_img}`} alt="" />
        ) : (
          <img
            src={`https://covers.openlibrary.org/b/olid/${lastBookRead?.book_cover_img}-L.jpg`}
            alt=""
          />
        )}
      </div>
      <div className="titleCont">
        <h6>{lastBookRead?.title}</h6>
      </div>
    </div>
  );
};
