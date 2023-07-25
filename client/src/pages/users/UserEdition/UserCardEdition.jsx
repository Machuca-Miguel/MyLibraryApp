import React from 'react'
import { Button } from "react-bootstrap";
import { FiAtSign } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";

export const UserCardEdition = ({userData}) => {
    console.log(userData);
  const URL_IMG = "http://localhost:4000/images/user/";

    return (
        <div className="userCardEdition">
          <div className="headlineCont">
            {/* Image */}
            <img
              className="profile_img"
              src={
                userData?.profile_img ? `${URL_IMG}${userData?.profile_img}` : `${URL_IMG}avatarDefault.png`
              }
              alt="Profile image"
            />
    
            {/* Title */}
            <div className="cardTitle">
              <h4>
                {userData?.name} {userData?.last_name}
              </h4>
              <p>
                <FiAtSign /> {userData?.user_name}
              </p>
            </div>
          </div>
    
          {/* Card info */}
          <div className="cardInfo ">
            <p>{userData?.biography}</p>
          </div>
         
         
        </div>
      );
}
