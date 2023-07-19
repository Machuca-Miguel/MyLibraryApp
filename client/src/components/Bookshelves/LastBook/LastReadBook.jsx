import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastIsReadDateObject } from "../../../helpers/dates";

export const LastReadBook = () => {
  const [lastBook, setLastBook] = useState();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBook(getLastIsReadDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);
  

  return (
    <div className="readBook">
      <h5>Read</h5>
      <div className='coverCont'>

        <img src={`/images/appImages/bookCovers/${lastBook?.cover_img}`} alt="" />
        </div>
        <div className="titleCont">
        <h6>{lastBook?.title}</h6>
      </div>
    </div>
  );
};
