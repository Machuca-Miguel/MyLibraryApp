import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastWishlistedObject } from "../../../helpers/dates";
import { useNavigate } from "react-router-dom";

export const LastWishlisted = () => {
  const [lastBook, setLastBook] = useState();
  const navigate = useNavigate();

  //Context use
  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBook(getLastWishlistedObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);

  return (
    <div className="whislist" onClick={() => navigate("/mybookshelf")}>
      <h5>Wishlist</h5>
      <div className='coverCont'>

        <img src={`/images/appImages/bookCovers/${lastBook?.cover_img}`} alt="" />
        </div>
        <div className="titleCont">
        <h6>{lastBook?.title}</h6>
      </div>
    </div>
  );
};
