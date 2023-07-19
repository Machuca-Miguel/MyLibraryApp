import React from "react";

export const OneBookCard = ({ oneBookData }) => {
  return (
    <div className="oneBookCard">
      <div className="coverImg">
        <img
          src={`https://covers.openlibrary.org/b/id/${oneBookData?.covers[1]}-L.jpg`}
          alt=""
        />
      </div>
      <div className="contentInfo">
        <h3>{oneBookData?.title}</h3>
      </div>
      <div className="moreContent">
        <h5>Description</h5>
        <p> {oneBookData?.description.value ? oneBookData?.description.value : oneBookData?.description} </p>
      </div>
    </div>
  );
};
