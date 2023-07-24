import axios from "axios";
import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AppContext } from "../../../../context/AppProvider";


export const SearchCard = ({   setSearch }) => {
  const {setSearchResult, setShowResult} = useContext(AppContext)

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (search) => {
    setSearch(search);
    setSearchResult("");


    let formatedSearch = search.bookSearch.replace(/ /g, "+");

    axios
      .get(`https://openlibrary.org/search.json?&q=${formatedSearch}`)
      .then((res) => {
        setSearchResult(res.data.docs);
       
      
      })
      .catch((error) => console.log(error));
    reset({ bookSearch: "" });
    setShowResult(true);
  };

  return (
    <div className="searchCard">
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
};
