import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const BookselfList = ({
  categoryTitle,
  showTitles,
  setShowTitles,
  bookShelvesData,
  categ,
  titNum,
  counter,
  setCounter,
  user_id
}) => {
  const [height, setHeight] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (bookShelvesData && categ) {
      setHeight("2.5rem");
      setCounter(
        bookShelvesData.filter((element) => element.category == categ).length
      );
    }

    return () => {};
  }, [bookShelvesData, categ]);

  return (
    <div className="contPpalLists"
      style={{ height: height, transition: "height 0.75s  ease-in-out", overflow: "hidden" }}
    >
      <div className="bookshlefCont">
        <h5>{categoryTitle}</h5>
        <h6>{counter}</h6>
        {showTitles === titNum ? (
          <div
            onClick={() => {
              setShowTitles(0);
              setHeight("2.5rem");
            }}
          >
            <IoIosArrowUp />
          </div>
        ) : (
          <div
            onClick={() => {
              setShowTitles(titNum);
              setHeight(`calc(${counter * 24 }px + 2.5rem)`);
            }}
          >
            <IoIosArrowDown />
          </div>
        )}
      </div>
      {showTitles === titNum && (
        <ol>
          {bookShelvesData?.map((element, index) => {
            if (element.category === categ) {
              return <li key={index} onClick={()=>navigate(`/userBooks/oneBook/${element.book_id}/${user_id}`)}>{element.title}</li>;
            }
          })}
        </ol>
      )}
    </div>
  );
};
