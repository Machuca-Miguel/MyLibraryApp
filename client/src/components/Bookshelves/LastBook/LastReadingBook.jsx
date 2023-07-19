import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastReadingDateObject } from "../../../helpers/dates";

export const LastReadingBook = () => {
  const [lastBook, setLastBook] = useState();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBook(getLastReadingDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);

  return (
    <div className="readingBook">
      <h5>Reading books</h5>
      <div className="coverCont">
        <img
          src={`/images/appImages/bookCovers/${lastBook?.cover_img}`}
          alt=""
        />
      </div>
      <div className="titleCont">
        <h6>{lastBook?.title}</h6>
      </div>
    </div>
  );
};
