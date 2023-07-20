import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

import "../../../../public/styles/registerUser/registerUser.scss";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  //useForm destructuring;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/users/createUser", data)
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="backgroundPpal"></section>
      <section className="contentPpal">
        <div className="cardFormRegister">
          <h3>Registration</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Label>First name</Form.Label>
              <Form.Control
                {...register("name", {
                  required: "Must be filled",
                  minLength: { value: 4, message: "Min length is 4" },
                })}
                type="text"
                placeholder="First name"
              />
              <Form.Text className="text-danger">
                {errors.name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                {...register("last_name")}
                type="text"
                placeholder="Last name"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                {...register("age", {
                  min: { value: 18, message: "Must be over 18" },
                })}
                type="number"
                placeholder="Age"
              />
              <Form.Text className="text-danger">
                {errors.age?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>User name</Form.Label>
              <Form.Control
                {...register("user_name", {
                  required: "Must be filled",
                  minLength: { value: 4, message: "Min length is 4" },
                })}
                type="text"
                placeholder="User name"
              />
              <Form.Text className="text-danger">
                {errors.user_name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...register("email", { required: "Must be filled" })}
                type="email"
                placeholder="Enter email"
              />
              {errors.email?.message}
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: "Must be filled",
                  // pattern: {
                  //   value:
                  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i,
                  //   message:
                  //     "Must be at least 8 and contain minus, MAYUS, number(0-9) and a Symbol(!@#$%^&*)",
                  // },
                })}
                type="password"
                placeholder="Password"
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            
            <Form.Text className=" fw-lighter text-light">
              Already registered? Login <Link to={"/login"}>here</Link>
            </Form.Text>

            <Form.Group className="mt-3 d-flex justify-content-between">
              <Button className="cancelButton" variant="outline-danger" onClick={() => navigate(-1)}>
                Cancel
              </Button>

              <Button className="submitButton" variant="outline-success" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  );
};
