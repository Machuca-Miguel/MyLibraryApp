import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateToYYYYMMDD } from "../../../../../helpers/dates";
import axios from "axios";
import { PiTrashBold } from "react-icons/pi";
import { TbPhotoOff } from "react-icons/tb";

export const EditionBookUserCard = ({
  handleEditClick,
  bookData,
  reset,
  setReset,
  setGridClass,
}) => {
  const [backgroundCoverImg, setBackgroundCoverImg] = useState();
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const { book_id, user_id } = useParams();

  //useForm destructuring;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  }, [bookData]);

  useEffect(() => {
    if (bookData) {
      for (const fieldName in bookData) {
        if (
          fieldName === "added_reading_date" ||
          fieldName === "is_read_date" ||
          fieldName === "to_read_date" ||
          fieldName === "wishlist_date"
        ) {
          setValue(fieldName, formatDateToYYYYMMDD(bookData[fieldName]));
        } else {
          setValue(fieldName, bookData[fieldName]);
        }
      }
    }

    return () => {};
  }, [bookData, setValue]);

  const handleImgChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (data) => {
    for (const fieldName in data) {
      if (data[fieldName] == undefined) {
        data[fieldName] = "";
      }
    }

    const newFormData = new FormData();

    newFormData.append("data", JSON.stringify(data));
    newFormData.append("file", file);

    axios
      .put(
        `http://localhost:4000/books/myBookshelf/updateBookInfo/${book_id}/${bookData.author_id}/${user_id}`,
        newFormData
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setReset(!reset);
    navigate(0);
  };

  const handleDeleteButton = () => {
    axios
      .put(
        `http://localhost:4000/books/myBookshelf/deleteCover/${book_id}/${user_id}`
      )
      .catch((err) => console.log(err));
    setReset(!reset);
  };

  return (
    // Card
    <div className="editionBookUserCard">
      {/* Backgorung  */}
      <div
        className="backgroundImage"
        style={{ backgroundImage: backgroundCoverImg }}
      ></div>
      {/* Content */}
      <div className="contentOneBookEditionCard">
        {/* Header */}
        <div className="headlineEditionBook">
          <div>
            <h3>My Book Edition</h3>
            <button onClick={() => handleEditClick("defaultGrid")}>Back</button>
          </div>
          <hr />
        </div>
        {/* Body */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="formBody">
            <div className="coverImgEdition">
              <div className="cover_Container">
                <img
                  src={backgroundCoverImg?.replace(/url\(|\)/g, "")}
                  alt=""
                />
                {bookData?.user_cover_img ? (
                  <Button variant="outline-danger" onClick={handleDeleteButton}>
                    <PiTrashBold />
                  </Button>
                ) : (
                  <div className="defaultCover">
                    <TbPhotoOff />
                    <span>Default Cover</span>
                  </div>
                )}
              </div>
              <Form.Group className="mt-3">
                <Form.Control type="file" onChange={handleImgChange} />
              </Form.Group>
            </div>

            <div className="wrapper1">
              <Form.Group className="mb-2 author_name">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  {...register("author_name")}
                  type="text"
                  placeholder="Author name"
                />
              </Form.Group>
              <Form.Group className="mb-2 genre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  {...register("genre")}
                  type="text"
                  placeholder="Genre"
                />
              </Form.Group>
            </div>

            <div className="wrapper2">
              <Form.Group className="current_page">
                <Form.Label>Current page</Form.Label>
                <Form.Control
                  {...register("current_page")}
                  type="text"
                  placeholder="Current Page"
                />
              </Form.Group>
              <Form.Group className="mood">
                <Form.Label>Mood</Form.Label>
                <Form.Control
                  {...register("mood")}
                  type="text"
                  placeholder="Mood"
                />
              </Form.Group>

              <Form.Group className="rating">
                <Form.Label>Rating</Form.Label>

                <div className="ratingStars">
                  <Form.Control
                    id="radio1"
                    type="radio"
                    {...register("rating")}
                    value="5"
                  />
                  <Form.Label className="starLabel" htmlFor="radio1">
                    ★
                  </Form.Label>
                  <Form.Control
                    id="radio2"
                    type="radio"
                    {...register("rating")}
                    value="4"
                  />
                  <Form.Label className="starLabel" htmlFor="radio2">
                    ★
                  </Form.Label>
                  <Form.Control
                    id="radio3"
                    type="radio"
                    {...register("rating")}
                    value="3"
                  />
                  <Form.Label className="starLabel" htmlFor="radio3">
                    ★
                  </Form.Label>
                  <Form.Control
                    id="radio4"
                    type="radio"
                    {...register("rating")}
                    value="2"
                  />
                  <Form.Label className="starLabel" htmlFor="radio4">
                    ★
                  </Form.Label>
                  <Form.Control
                    id="radio5"
                    type="radio"
                    {...register("rating")}
                    value="1"
                  />
                  <Form.Label className="starLabel" htmlFor="radio5">
                    ★
                  </Form.Label>
                </div>
              </Form.Group>
            </div>

            <div className="wrapper3">
              <Form.Group className="format">
                <Form.Label>Book Format</Form.Label>
                <Form.Control
                  {...register("format")}
                  type="text"
                  placeholder="Book Format"
                />
              </Form.Group>

              <Form.Group className="date1">
                <Form.Label>Read Date</Form.Label>
                <Form.Control
                  {...register("is_read_date")}
                  type="date"
                  placeholder="Read Date"
                />
              </Form.Group>
            </div>

            <div className="wrapper4">
              <Form.Group className="comments">
                <Form.Label>Comments</Form.Label>

                <Form.Control
                  {...register("comments")}
                  type="text"
                  as="textarea"
                  placeholder="Comments"
                  className="inputGroup"
                />
              </Form.Group>

              <Form.Group className="sinopsis">
                <Form.Label>Sinopsis</Form.Label>
                <Form.Control
                  {...register("sinopsis")}
                 
                  type="text"
                  as="textarea"
                  placeholder="Sinopsis"
                  className="inputGroup"
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mt-4 d-flex justify-content-evenly buttons">
            <Button
              className="cancelButton"
              variant="outline-danger"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>

            <Button
              className="submitButton"
              variant="outline-success"
              type="submit"
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
