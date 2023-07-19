import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BookResultList = ({ searchResult, showResult, search }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to handle checkbox visibility
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxes.forEach((box, idx) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    };
    // Select all elements with the class "box"
    const boxes = document.querySelectorAll(".box");
    // Add scroll event listener and call checkBoxes function
    window.addEventListener("scroll", checkBoxes);
    checkBoxes();

    return () => {
      // Remove the scroll event listener when component unmounts
      window.removeEventListener("scroll", checkBoxes);
    };
  }, [searchResult]);

  return (
    <>
      {showResult && (
        <>
          <div className="bookListCard">
            {searchResult ? (
              searchResult.length > 0 ?
              <>
                <h3 className="mb-0 align-self-start">
                  Results of "{search.bookSearch}"
                </h3>
                <hr className="mt-0" />
                <table className="resultTable">
                  <thead>
                    <tr>
                      <th>Cover</th>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody className="overflow-hidden">
                    {searchResult?.map((element) => {
                      return (
                        <tr
                          className="box"
                          key={element.key}
                          onClick={() =>
                            navigate(`/allBooks/oneBook${element.key}`)
                          }
                        >
                          <td>
                            <div className="tableImgCont">
                              {element.cover_i ? (
                                <img
                                  src={`https://covers.openlibrary.org/b/id/${element.cover_i}-S.jpg`}
                                  alt="Book cover"
                                />
                              ) : (
                                <img
                                  className="soonGif"
                                  src="/images/appImages/soon.gif"
                                />
                              )}
                            </div>
                          </td>
                          <td>{element?.title}</td>
                          <td>
                            {" "}
                            {element.author_name && element.author_name[0]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
              : <h3 >No results..</h3>
            ) : (
              <div className="loadingImg">
                <img src="/images/appImages/searchLoadingGif.gif" />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
