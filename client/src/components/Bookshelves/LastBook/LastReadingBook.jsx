import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastReadingDateObject } from "../../../helpers/dates";

export const LastReadingBook = () => {
  const [lastBookReading, setLastBookReading] = useState();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookReading(getLastReadingDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);

  return (
    <div className="readingBook">
      <h5>Reading books</h5>
      <div className="coverCont">
        {lastBookReading?.user_cover_img ? (
          <img src={`${lastBookReading?.user_cover_img}`} alt="" />
        ) : (
          <img src={`${lastBookReading?.book_cover_img}`} alt="" />
        )}
      </div>
      <div className="titleCont">
        <h6>{lastBookReading?.title}</h6>
      </div>
    </div>
  );
};
