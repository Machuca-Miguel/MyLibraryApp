import React, { useContext } from "react";
import "/public/styles/home/homeStyle.scss";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const { setSearchResult, setShowResult } = useContext(AppContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (search) => {
    console.log(search);

    let formatedSearch = search.bookSearch.replace(/ /g, "+");

    axios
      .get(`https://openlibrary.org/search.json?lang=spa&q=${formatedSearch}`)
      .then((res) => {
        setSearchResult(res.data.docs);
      })
      .catch((error) => console.log(error));
    setShowResult(true);
    reset({ bookSearch: "" });
    navigate("/allBooks");
  };

  return (
    <>
      <section className="backgroundPpal"></section>
      <section className="homeContent">
        <div className="landingCont">
          <div className="landingText">
            <h1 className="title1">
              Discover a world of kn<span>owl</span>edge and adventures within
              the pages of our b
              <img
                className="imgOOwl"
                src="/images/appImages/ooOwl.jpg"
                alt=""
              />
              ks.
            </h1>
            <h1 className="title2">Discover a world of knowledge</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              dolor.
            </p>
            <div className="homeSearchCard">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex">
                  <Form.Control
                    {...register("bookSearch", {
                      required: "Must not be empty",
                      minLength: { value: 4, message: "Min length is 4" },
                    })}
                    type="text"
                    placeholder="Search"
                    isInvalid={errors.bookSearch && true}
                    className={errors.bookSearch && "shake-horizontal"}
                  />
                  <Button
                    className={errors.bookSearch && "shake-horizontal"}
                    variant={
                      errors.bookSearch ? "outline-danger" : "outline-dark"
                    }
                    type="submit"
                  >
                    Search
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <div className="landingImage">
            <img src="/images/appImages/landingImg12.png" alt="" />
          </div>
        </div>
        <div className="landingCont2">
          <div className="userCont">user</div>
          <div className="libraryCont">Chek our library</div>
          <div className="buyMeACoffeCont">Buy me a coffe</div>
        </div>
      </section>
    </>
  );
};
