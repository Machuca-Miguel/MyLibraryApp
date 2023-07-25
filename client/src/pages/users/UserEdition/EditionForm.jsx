import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../../context/AppProvider";

import { IoMdArrowDropdown } from "react-icons/io";

import { IoMdArrowDropup } from "react-icons/io";

export const EditionForm = ({ userData }) => {
  const { setReset, reset } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  //useForm destructuring;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userData) {
      for (const fieldName in userData) {
        setValue(fieldName, userData[fieldName]);
      }
    }
  }, [userData, setValue]);

  const onSubmit = (data) => {
    axios
      .post(
        `http://localhost:4000/users/oneUser/userEdition/${userData.user_id}`,
        data
      )
      .then((res) => {
        navigate("/user");
        setReset(!reset);
      })
      .catch((err) => console.log(err));
  };

  const closedFormHeight = "calc(48px + 1.5rem)";
  const openedFormMaxHeight = "450px";

  return (
    <>
      {!showForm ? (
        <div
          className="editionForm"
          style={{ height: closedFormHeight, transition: "height 0.75s  ease-in-out" }}
        >
          <div className="header">
            <div className="d-flex justify-content-between align-items-end">
              <h3>Edit profile</h3>
              
              <button onClick={() => setShowForm(true)}>
                Edit <IoMdArrowDropdown />
              </button>
            </div>
            <hr className="mb-0"/>
          </div>
        </div>
      ) : (
        <div
          className="editionForm"
          style={{ height: openedFormMaxHeight, transition: "height 0.75s  ease-in-out" }}
        >
          <div className="header">
            <div className="d-flex justify-content-between align-items-end">
              <h3>Profile Edition</h3>
              
              <button onClick={() => setShowForm(false)}>
                Close <IoMdArrowDropup />
              </button>
            </div>
            <hr className="mb-0"/>
            <hr />
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2 first_name">
              <Form.Label>First name</Form.Label>

              <Form.Control
                {...register("name", {
                  required: "Must be filled",
                  minLength: { value: 4, message: "Min length is 4" },
                })}
                type="text"
                placeholder="Name"
              />
              <Form.Text className="text-danger">
                {errors.name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2 last_name">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                {...register("last_name", {
                  required: "Must be filled",
                  minLength: { value: 4, message: "Min length is 4" },
                })}
                type="text"
                placeholder="Last name"
              />
              <Form.Text className="text-danger">
                {errors.last_name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2 birth_year">
              <Form.Label>Birth year</Form.Label>
              <Form.Control
                {...register("birth_year", {
                  min: { value: 18, message: "Must be over 18" },
                })}
                type="number"
                placeholder="Birth year"
              />
              <Form.Text className="text-danger">
                {errors.birth_year?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="user_name">
              <Form.Label>User name</Form.Label>
              <InputGroup className="mb-2 ">
                <InputGroup.Text className="inputGroup" id="basic-addon1">
                  @
                </InputGroup.Text>
                <Form.Control
                  {...register("user_name", {
                    required: "Must be filled",
                    minLength: { value: 4, message: "Min length is 4" },
                  })}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  type="text"
                  placeholder="Username"
                  className="inputGroup"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.user_name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="biography">
              <Form.Label>Biography</Form.Label>

              <Form.Control
                {...register("biography", {
                  required: false,
                  minLength: { value: 4, message: "Min length is 4" },
                  maxLength: { value: 150, message: "Max length is 150" },
                })}
                type="text"
                as="textarea"
                placeholder="Biography"
                className="inputGroup"
              />

              <Form.Text className="text-danger">
                {errors.biography?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mt-3 d-flex justify-content-evenly buttons">
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
      )}
    </>
  );
};
