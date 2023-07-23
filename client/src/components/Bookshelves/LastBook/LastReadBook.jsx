import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastIsReadDateObject } from "../../../helpers/dates";

export const LastReadBook = () => {
  const [lastBookRead, setLastBookRead] = useState();

  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookRead(getLastIsReadDateObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);
  console.log(lastBookRead);
  

  return (
    <div className="readBook">
      <h5>Read Books</h5>
      <div className='coverCont'>

       
        {lastBookRead?.user_cover_img ? 
       <img 
       src={`${lastBookRead?.user_cover_img}`}
       alt="" />
        : <img src={`${lastBookRead?.book_cover_img}`} alt="" />
      }
      
      
      

        </div>
        <div className="titleCont">
        <h6>{lastBookRead?.title}</h6>
      </div>
    </div>
  );
};
