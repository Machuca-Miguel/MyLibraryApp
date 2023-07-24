import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../../../../public/styles/login/loginStyle.scss";
import { saveLocalStorage } from "../../../helpers/localStorage";
import { AppContext } from "../../../context/AppProvider";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const { setUser, setIsLogged } = useContext(AppContext);

  const navigate = useNavigate();
  //useForm destructuring;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //On submit form;
  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/users/login", data)
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        saveLocalStorage("token", res.data.token);
        setIsLogged(true);

        const userType = res.data.user.type;
        if (userType === 0) {
          navigate("/user");
        } else if (userType === 1) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => setErrorMessage(err));
  };

  return (
    <>
      <section className="backgroundPpal"></section>
      <section className="contentPpal">
        <div className="cardFromLogin">
        <div className="header">
          <h3>Login</h3>
        </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2 email">
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
                })}
                type="password"
                placeholder="Password"
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Text className="text-danger">{errorMessage}</Form.Text>

            <Form.Text className=" fw-lighter text-light">
              Not registered yet? Register <Link className="link" to={"/register"}>here</Link>
            </Form.Text>
            
            <Form.Group className="mt-3 d-flex justify-content-evenly">
              <Button className="cancelButton" variant="outline-danger" onClick={() => navigate(-1)}>
                Cancel
              </Button>

              <Button className="submitButton" variant="outline-success" type="submit">
                <span>Submit</span>
              </Button>
            </Form.Group>

          </Form>
        </div>
      </section>
    </>
  );
};
