import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { getLastWishlistedObject } from "../../../helpers/dates";
import { useNavigate } from "react-router-dom";

export const LastWishlisted = () => {
  const [lastBookWishlisted, setLastBookWishlisted] = useState();
  const navigate = useNavigate();

  //Context use
  const { bookshelf, isLogged } = useContext(AppContext);

  useEffect(() => {
    if (bookshelf) {
      setLastBookWishlisted(getLastWishlistedObject(bookshelf));
    }

    return () => {};
  }, [isLogged]);

  return (
    <div className="whislist" onClick={() => navigate("/mybookshelf")}>
      <h5>Wishlist</h5>
      <div className="coverCont">
        {lastBookWishlisted?.user_cover_img ? (
          <img src={`${lastBookWishlisted?.user_cover_img}`} alt="" />
        ) : (
          <img src={`${lastBookWishlisted?.book_cover_img}`} alt="" />
        )}
      </div>
      <div className="titleCont">
        <h6>{lastBookWishlisted?.title}</h6>
      </div>
    </div>
  );
};
