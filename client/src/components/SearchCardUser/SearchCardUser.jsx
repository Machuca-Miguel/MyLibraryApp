import axios from "axios";
import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";

export const SearchCardUser = () => {
    const {setSearchResult} = useContext(AppContext)

    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
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
      reset({ bookSearch: "" });
      navigate("/allBooks")
    };
  
    return (
      <div className="searchCardUser">
        <h3 className="mb-0">Search any book</h3>
        <hr className="mt-0" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex">
            <Form.Control
              {...register("bookSearch", {
                required: "Must not be empty",
                minLength: { value: 4, message: "Min length is 4" },
              })}
              type="text"
              placeholder="Search"
              isInvalid={errors.bookSearch && true }
              className= {errors.bookSearch && "shake-horizontal"} />
            <Button className= {errors.bookSearch && "shake-horizontal"} variant={errors.bookSearch ? "outline-danger" :"outline-dark"} type="submit">
              Search
            </Button>
          </div>
          <Form.Text className="text-danger">{errors.bookSearch?.message}</Form.Text>
        </Form>
      </div>
    );
}



