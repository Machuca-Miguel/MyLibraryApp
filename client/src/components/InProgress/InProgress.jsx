import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import { ProgressReadingBar } from "./ProgressReadingBar";

export const InProgress = () => {
  const { bookshelf } = useContext(AppContext);

  const filteredBooks = bookshelf
    ?.filter((element) => element.added_reading_date)
    .slice(0, 3);

  return (
    <div className="progressCard">
      <div className="m-0">
        <h3 className="mb-0">Currently reading</h3>
        <hr className="mt-0" />
      </div>

      <div className="booksList">
        {filteredBooks?.map((element, index) => {
          return (
            <div key={element.index} className="listedBook">
              <h5 className="title">{element.title}</h5>

              <ProgressReadingBar element={element}  className="progressReadingContent"/>

              <p className="text-end pages">
                {element.current_page} of {element.pages_number}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
