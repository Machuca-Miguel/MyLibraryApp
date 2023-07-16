import React, { children, createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../helpers/localStorage";
import jwtDecode from 'jwt-decode'
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const localToken = getLocalStorage("token")
    setToken(localToken);

    if(localToken){
       
      const {id, type} = jwtDecode(localToken).user;
      axios
          .get(`http://localhost:4000/users/oneUser/${id}`)
          .then((res)=>{
            console.log(res,"ress providerrrrrrrrrrrrrr");
              setUser(res.data.resultUser[0])
              setIsLogged(true);
              setTravels(res.data.resultTravel)
          })
          .catch((err)=>{console.log(err);})
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser, setIsLogged, isLogged }}>
    {children}
    </AppContext.Provider>
  );
};
