import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import avatarDefault from "../../../public/images/appImages/avatarDefault.png";
import { Button } from "react-bootstrap";
import { FiAtSign } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";

export const UserCard = () => {
  const { user } = useContext(AppContext);

  const URL_IMG = "http://localhost:4000/images/user/";

  return (
    <div className="userCard">
      <div className="headlineCont">
        {/* Image */}
        <img
          className="profile_img"
          src={
            user?.profile_img ? `${URL_IMG}${user?.profile_img}` : avatarDefault
          }
          alt="Profile image"
        />

        {/* Title */}
        <div className="cardTitle">
          <h4>
            {user?.name} {user?.last_name}
          </h4>
          <h6>
            <FiAtSign /> {user?.user_name}
          </h6>
        </div>
      </div>

      {/* Card info */}
      <div className="cardInfo ">
        <p>{user?.biography}</p>
      </div>
      <div className="cardNavigation">
        <Button variant="outline-dark"><span className="textButton">Modify</span> <span className="userSettingIcon"><GrUserSettings/></span></Button>
      </div>
      {/* Card navigation */}
    </div>
  );
};
