import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { Button } from "react-bootstrap";
import { FiAtSign } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const UserCard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  const URL_IMG = "http://localhost:4000/images/user/";

  return (
    <div className="userCard">
      <div className="headlineCont">
        {/* Image */}
        <img
          className="profile_img"
          src={
            user?.profile_img ? `${URL_IMG}${user?.profile_img}` :  `${URL_IMG}avatarDefault.png` 
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


      {/* Card navigation */}
      <div className="cardNavigation">
        <Button variant="outline-dark" onClick={()=>{navigate(`/userEdition/${user?.user_id}`)}}><span className="textButton">Modify</span> <span className="userSettingIcon"><GrUserSettings/></span></Button>
      </div>
    </div>
  );
};
