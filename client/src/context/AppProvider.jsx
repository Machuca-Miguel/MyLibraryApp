import React, { children, createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../helpers/localStorage";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [bookshelf, setBookshelf] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const [showResult, setShowResult] = useState(false)



  useEffect(() => {
    const localToken = getLocalStorage("token");
    setToken(localToken);

    if (localToken) {
      const { id, type } = jwtDecode(localToken).user;
      axios
        .get(`http://localhost:4000/users/oneUser/${id}`)
        .then((res) => {
          setUser(res.data.resultUser[0]);
          setBookshelf(res.data.resultBook);
          console.log(res.data.resultBook);
          setIsLogged(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {};
  }, [isLogged]);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        setIsLogged,
        isLogged,
        bookshelf,
        setBookshelf,
        searchResult,
        setSearchResult,
        showResult, 
        setShowResult
     
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
