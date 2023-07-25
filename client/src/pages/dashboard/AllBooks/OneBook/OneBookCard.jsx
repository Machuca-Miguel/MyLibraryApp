import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/AppProvider";
import loadingAnimation from "../../../../../public/images/appImages/loadingAnimation.gif";
import { Spinner } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
 
export const OneBookCard = ({ oneBookSearchData, olid }) => {
  const [bookDataToAdd, setbookDataToAdd] = useState({});
  const [loading, setLoading] = useState();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setbookDataToAdd({
      ...bookDataToAdd,
      title: oneBookSearchData?.title,
      genre: oneBookSearchData?.subject ? oneBookSearchData.subject[0] : null,
      pages_number: oneBookSearchData?.number_of_pages_median
        ? oneBookSearchData?.number_of_pages_median
        : null,
      publish_year: oneBookSearchData?.first_publish_year
        ? oneBookSearchData?.first_publish_year
        : null,
      isbn: oneBookSearchData?.isbn ? oneBookSearchData?.isbn[0] : null,
      sinopsis: oneBookSearchData?.first_sentence
        ? oneBookSearchData?.first_sentence[oneBookSearchData?.first_sentence.length - 1].split('.')[0].trim()
        : null,
      author_name: oneBookSearchData?.author_name
        ? oneBookSearchData.author_name[0]
        : "Anonimous",
      cover_img: oneBookSearchData?.cover_edition_key
        ? oneBookSearchData?.cover_edition_key
        : null,
    });

    oneBookSearchData && setLoading(false);
    return () => {};
  }, [oneBookSearchData, olid]);

  const bookCardBg = {
    backgroundImage: `url('https://covers.openlibrary.org/b/olid/${oneBookSearchData?.cover_edition_key}-L.jpg')`,
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
      user?.user_id &&
      (bookDataToAdd.to_read_date ||
      bookDataToAdd.is_read_date ||
      bookDataToAdd.wishlist_date ||
      bookDataToAdd.added_reading_date)
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

  const imageLoaded = (e) => {
    e.target.classList.add("loaded");
  };

  return (
    <div className="oneBookCard">
      <div className="backgroundImage" style={bookCardBg}></div>
      <div className="content">
        <div className="headline">
          <button onClick={()=>navigate(-1)}><AiOutlineArrowLeft/></button><h3>Book Details</h3>
        </div>
        <div className="coverImg">
          {loading ? (
            <>
              <Spinner animation="border" role="status">
                <span className="visually-hidden ">Loading...</span>
              </Spinner>
            </>
          ) : (
            <>
              {oneBookSearchData?.cover_i ? (
                <>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${oneBookSearchData?.cover_i}-L.jpg`}
                    alt="cover"
                    onLoad={imageLoaded}
                    className="cover"
                  />
                </>
              ) : (
                <div className="errorCont">
                  <img
                    className="error"
                    src="/images/appImages/error.gif"
                    alt=""
                  />
                  <h6>Upss.., not avaliable</h6>
                </div>
              )}
            </>
          )}
        </div>
        <div className="contentInfo">
          <div>
            {oneBookSearchData?.title ? (
              <>
                <h6>Title: </h6>
                <h4>{oneBookSearchData?.title}</h4>
              </>
            ) : (
              <img className="loadingGif" src={loadingAnimation} alt="" />
            )}
          </div>
          <div>
            {oneBookSearchData?.author_name && (
              <>
                <h6>Author: </h6>
                <h4> {oneBookSearchData?.author_name[0]}</h4>
              </>
            )}
          </div>
          <div>
            {oneBookSearchData?.subject && (
              <>
                <h6>Genre: </h6>
                <h5>
                  {oneBookSearchData.subject[0]},{oneBookSearchData.subject[1]}
                </h5>
              </>
            )}
          </div>
          <div className="d-flex gap-5">
            <div>
              {oneBookSearchData?.publish_date && (
                <>
                  <h6>Publish Date: </h6>
                  <h4>{oneBookSearchData?.publish_date[0]}</h4>
                </>
              )}
            </div>
            <div>
              {oneBookSearchData?.number_of_pages_median && (
                <>
                  <h6>Nº of pages: </h6>
                  <h4> {oneBookSearchData?.number_of_pages_median}</h4>
                </>
              )}
            </div>
          </div>
        </div>
        {oneBookSearchData?.first_sentence && (
          <div className="moreContent">
            <h6>First sentence</h6>
            <h5>{oneBookSearchData?.first_sentence[oneBookSearchData?.first_sentence.length - 1].split('.')[0].trim()}</h5>
          </div>
        )}
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
