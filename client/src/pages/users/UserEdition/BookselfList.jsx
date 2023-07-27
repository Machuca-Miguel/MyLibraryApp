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
  user_id,
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
    <div
      className="contPpalLists"
      style={{
        height: height,
        transition: "height 0.75s  ease-in-out",
        overflow: "hidden",
      }}
    >
      {showTitles === titNum ? (
        <div
          className="bookshlefCont"
          onClick={() => {
            setShowTitles(0);
            setHeight("2.5rem");
          }}
        >
          <h5>{categoryTitle}</h5>
          <h6>{counter}</h6>
          <div>
            <IoIosArrowUp />
          </div>
        </div>
      ) : (
        <div
          className="bookshlefCont"
          onClick={() => {
            setShowTitles(titNum);
            setHeight(`calc(${counter * 24}px + 2.5rem)`);
          }}
        >
          <h5>{categoryTitle}</h5>
          <h6>{counter}</h6>
          <div
           
          >
            <IoIosArrowDown />
          </div>
        </div>
      )}
      {showTitles === titNum && (
        <ol>
          {bookShelvesData?.map((element, index) => {
            if (element.category === categ) {
              return (
                <li
                  key={index}
                  onClick={() =>
                    navigate(
                      `/userBooks/oneBookEdition/${element.book_id}/${user_id}`
                    )
                  }
                >
                  {element.title}
                </li>
              );
            }
          })}
        </ol>
      )}
    </div>
  );
};
