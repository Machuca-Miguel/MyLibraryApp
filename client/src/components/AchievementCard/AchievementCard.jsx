import React, { useState } from "react";
import { Form, ProgressBar } from "react-bootstrap";

export const AchievementCard = () => {
    const [yearSelected, setYearSelected] = useState(new Date().getFullYear())

    
  return (
    <div className="achievementCard">
      <div>
        <div className="d-flex justify-content-between align-items-center p-1">
          <h3 className="mb-0">Achievements</h3>
        
        </div>
        <hr className="mt-0"/>
      </div>
      <div className="cardContent">
        <h6>2023</h6>
        <ProgressBar max={13} now={6} className="progressReadingBar" />
        <h6>40%</h6>
      </div>
    </div>
  );
};
