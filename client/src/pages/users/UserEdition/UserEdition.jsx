import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserCardEdition } from "./UserCardEdition";

import "./userEditionStyle.scss";
import { EditionForm } from "./EditionForm";
import { BookshlefCardUserEdition } from "./BookshlefCardUserEdition";

export const UserEdition = () => {
  const [userData, setUserData] = useState();
  const [bookshelfData, setBookshelfData] = useState();
  const { user_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/oneUser/${user_id}`)
      .then((res) => {
        setUserData(res.data.resultUser[0]);
        setBookshelfData(res.data.resultBook);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

  return (
    <>
      <section className="backgroundPpal"></section>
      <section className="contentPpal">
        <UserCardEdition userData={userData}/>
        <EditionForm userData={userData}  />
        <BookshlefCardUserEdition user_id={user_id}/>
      </section>
    </>
  );
};
