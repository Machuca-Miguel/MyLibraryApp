import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import loadingAnimation from "../../../../../public/images/appImages/loadingAnimation.gif";
import { Spinner } from "react-bootstrap";

export const OneBookCard = ({ oneBookData, olid }) => {
  const [bookDataToAdd, setbookDataToAdd] = useState({});
  const { user } = useContext(AppContext);


  useEffect(() => {
    setbookDataToAdd({
      ...bookDataToAdd,
      title: oneBookData?.title,
      genre: oneBookData?.subjects ? oneBookData.subjects[0]?.name : "",
      pages_number: oneBookData?.number_of_pages,
      publish_year: oneBookData?.first_publish_year,
      isbn: oneBookData?.identifiers?.isbn_13,
      sinopsis: oneBookData?.first_sentence && oneBookData?.first_sentence[0]  ,
      author_name: oneBookData?.authors && oneBookData.authors[0]?.name,
      cover_img: oneBookData?.cover_edition_key,
    });
    return () => {};
  }, [oneBookData, olid]);

  const bookCardBg = {
    backgroundImage: `url('https://covers.openlibrary.org/b/olid/${oneBookData?.cover_edition_key}-L.jpg')`,
  };

  const handleSubmit = (category) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setbookDataToAdd({ ...bookDataToAdd, [category]: formattedDate });
  };

  useEffect(() => {
    // Axios only when any of the buttons categories exist.
    if (
      (user?.user_id && bookDataToAdd.to_read_date) ||
      bookDataToAdd.is_read_date ||
      bookDataToAdd.wishlist_date ||
      bookDataToAdd.added_reading_date
    ) {
      axios
        .post(
          `http://localhost:4000/books/addBook/myBookshelf/${user.user_id}`,
          bookDataToAdd
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [bookDataToAdd]);

  return (
    <div className="oneBookCard">
      <div className="backgroundImage" style={bookCardBg}></div>
      <div className="content">
        <div className="headline">
          <h3>Book Details</h3>
        </div>
        <div className="coverImg">
          {oneBookData?.cover_edition_key ? (
            <img src={`https://covers.openlibrary.org/b/olid/${oneBookData?.cover_edition_key}-L.jpg`} alt="cover" />
          ) : (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          )}
        </div>
        <div className="contentInfo">
          <div>
            <h6>Title: </h6>
            <h4> {oneBookData?.title ? oneBookData?.title : <img className="loadingGif" src={loadingAnimation} alt="" /> }</h4>
          </div>
          <div>
            <h6>Author: </h6>{oneBookData?.author_name === "" ? <h4>Unknown</h4> : <>
            {oneBookData?.author_name ? 
            <h4> {oneBookData?.author_name[0]}</h4>
            : <h4> <img className="loadingGif" src={loadingAnimation} alt="" /> </h4>
            }
            </>}
          </div>
          <div>
              {oneBookData?.subjects &&<>
            <h6>Genre: </h6>
            <h4>
              
              {oneBookData.subjects[0]?.name}, {oneBookData.subjects[1]?.name}
            </h4>
              </> }
          </div>
          <div className="d-flex gap-5">
            <div>
              <h6>Publish Year: </h6>
              <h4> {oneBookData?.first_publish_year}</h4>
            </div>
            <div>
              {oneBookData?.number_of_pages_median && <>
              <h6>Nº of pages: </h6>
              <h4> {oneBookData?.number_of_pages_median}</h4>
              </>}
            </div>
          </div>
        </div>
        {oneBookData?.first_sentence && 
        <div className="moreContent">
          <h6>First sentence</h6>
          <h5>{oneBookData?.first_sentence}</h5>
        </div>
        }
        <div className="footer">
          <button
            onClick={() => {
              handleSubmit("is_read_date");
            }}
          >
            Add to Read List
          </button>
          <button
            onClick={() => {
              handleSubmit("added_reading_date");
            }}
          >
            Add to Reading List
          </button>
          <button
            onClick={() => {
              handleSubmit("to_read_date");
            }}
          >
            Add to To-Read List
          </button>
          <button
            onClick={() => {
              handleSubmit("wishlist_date");
            }}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
