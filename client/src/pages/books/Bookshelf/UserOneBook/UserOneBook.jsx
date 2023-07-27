import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { OneBookUserCard } from "./oneBookUserCard/OneBookUserCard";
import "./userOneBook.scss";
import { UserCard } from "../../../../components/UserCard/UserCard";
import { EditionBookUserCard } from "./EditionBookUserCard/EditionBookUserCard";

export const UserOneBook = () => {
  const [gridClass, setGridClass] = useState("defaultGrid");
  const [bookData, setBookData] = useState();
  const { book_id, user_id } = useParams();
  const [reset, setReset] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/books/allMyBookshelves/oneBookEdition/${book_id}/${user_id}`
      )
      .then((res) => {
        setBookData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, [reset]);

  const handleEditClick = (gridClass) => {
    setGridClass(gridClass);
  };

  return (
    <>
      <section className="sectionBgUserOneBooks"></section>

      <section className={`contentSectionUserOneBook ${gridClass}`}>
        <UserCard/>

        <OneBookUserCard
          handleEditClick={handleEditClick}
          bookData={bookData}
        />
        <EditionBookUserCard handleEditClick={handleEditClick} bookData={bookData} reset={reset} setReset={setReset} setGridClass={setGridClass}/>
     
      </section>
    </>
  );
};
