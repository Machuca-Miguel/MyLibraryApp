import React, { useEffect, useRef, useState } from "react";

export const OneBookUserCard = ({ handleEditClick, bookData }) => {
  const [backgroundCoverImg, setBackgroundCoverImg] = useState();
  // Set backgroungImg to the div
  useEffect(() => {
    if (bookData?.user_cover_img) {
      setBackgroundCoverImg(
        `url(http://localhost:4000/images/book_cover/${bookData?.user_cover_img})`
      );
    } else {
      setBackgroundCoverImg(
        `url(https://covers.openlibrary.org/b/olid/${bookData?.book_cover_img}-L.jpg)`
      );
    }

    return () => {};
  }, [bookData, backgroundCoverImg]);

  //Add a new class to the img when it's loaded
  const imageLoaded = (e) => {
    e.target.classList.add("loaded");
  };
  //Generate an array from 1 to 5
  const starsArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="oneBookUserCard">
      <div
        className="backgroundImage"
        style={{ backgroundImage: backgroundCoverImg }}
      ></div>
      <div className="contentOneBookUserCard">
        <div className="headlineUserBook">
          <h3>My Book Preview</h3>
          <button onClick={() => handleEditClick("newGrid")}>Edit</button>
        </div>
        <hr />
        <div className="bodyUserBook">
          <div className="bookCover">
            {bookData?.book_cover_img || bookData?.user_cover_img ? (
              <img
                src={
                  bookData?.user_cover_img
                    ? `http://localhost:4000/images/book_cover/${bookData?.user_cover_img}`
                    : `https://covers.openlibrary.org/b/olid/${bookData?.book_cover_img}-L.jpg`
                }
                alt="Book cover"
                onLoad={imageLoaded}
                className="cover"
              />
            ) : (
              "Loading"
            )}
          </div>
          <div className="bookInfo">
            {bookData?.title && (
              <>
                <h6>Titulo:</h6>
                <h5>{bookData?.title}</h5>
              </>
            )}

            {bookData?.author_name && (
              <>
                <h6>Author:</h6>
                <h5>{bookData?.author_name}</h5>
              </>
            )}
            {bookData?.genre && (
              <>
                <h6>Genre:</h6>
                <h5>{bookData?.genre}</h5>
              </>
            )}

            <div className="d-flex gap-5">
              {bookData?.publish_year && (
                <div>
                  <h6>Publish Year:</h6>
                  <h5>{bookData?.publish_year}</h5>
                </div>
              )}
              {bookData?.pages_number && (
                <div>
                  <h6>Nº Pages:</h6>
                  <h5>{bookData?.pages_number}</h5>
                </div>
              )}
              {bookData?.current_page && (
                <div>
                  <h6>Current Page:</h6>
                  <h5>{bookData?.current_page}</h5>
                </div>
              )}
            </div>
            <div className="d-flex gap-5">
              {bookData?.rating && (
                <div>
                  <h6>Rating:</h6>
                  <h5>
                    {starsArray.map((star) => (
                      <span
                        key={star}
                        className={
                          star <= bookData?.rating ? "starFilled" : "starEmpty"
                        }
                      >
                        &#9733;
                      </span>
                    ))}
                  </h5>
                </div>
              )}
              {bookData?.mood && (
                <div>
                  <h6>Mood:</h6>
                  <h5>{bookData?.mood}</h5>
                </div>
              )}
              {bookData?.format && (
                <div>
                  <h6>Mood:</h6>
                  <h5>{bookData?.format}</h5>
                </div>
              )}
            </div>
            <h6>Category:</h6>
            <h5>
              {bookData?.added_reading_date && "Reading"}{" "}
              {bookData?.is_read_date && "Already read"}{" "}
              {bookData?.to_read_date && "To read"}{" "}
              {bookData?.wishlist_date && "Wished"}
            </h5>
          </div>
          <div className="moreInfo">
            {bookData?.sinopsis !== "Not avaliable" && (
              <>
                <h6>First Sentence: </h6>
                <p>{bookData?.sinopsis}</p>
              </>
            )}
            {bookData?.comments && (
              <>
                <h6>My Comments: </h6>
                <p>{bookData?.comments}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
