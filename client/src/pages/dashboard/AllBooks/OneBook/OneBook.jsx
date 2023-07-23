import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { OneBookCard } from "./OneBookCard";
import "/public/styles/oneBook/oneBookStyle.scss";

export const OneBook = () => {
  const [oneBookData, setoneBookData] = useState();

  let { type, olid } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://openlibrary.org/search.json?q=${olid}`
      )
      .then((res) => {
        setoneBookData(res.data.docs[0]);
        console.log(res.data.docs[0], "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      });

    return () => {};
  }, []);
  return (
    <>
      <section className="sectionBgOneBooks"></section>
      <section className="contentSection">
        <OneBookCard oneBookData={oneBookData} olid={olid} />
      </section>
    </>
  );
};
