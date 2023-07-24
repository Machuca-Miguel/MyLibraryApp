import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastReadingDateObject } from "../../../helpers/dates";
import { useNavigate } from "react-router-dom";

export const LastReadingBook = () => {
  const [lastBookReading, setLastBookReading] = useState();
  const navigate = useNavigate();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookReading(getLastReadingDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);
  console.log(lastBookReading, "readiiiiiiiiiiiiiiiiiiiiiiiiing");

  return (
    <div className="readingBook"  onClick={() => navigate("/mybookshelf")}>
      <h5>Reading books</h5>
      <div className="coverCont">
        {lastBookReading?.user_cover_img ? (
          <img src={`${lastBookReading?.user_cover_img}`} alt="" />
        ) : (
          <img src={`https://covers.openlibrary.org/b/olid/${lastBookReading?.book_cover_img}-L.jpg`} alt="" />
        )}
      </div>
      <div className="titleCont">
        <h6>{lastBookReading?.title}</h6>
      </div>
    </div>
  );
};
