import React from "react";
import { ProgressBar } from "react-bootstrap";
import  {calculateCurrentPageInPercentage} from "../../helpers/pageProgress"

export const ProgressReadingBar = ({element}) => {
    let currentPercentage = calculateCurrentPageInPercentage(element?.current_page, element?.pages_number )
  return (
    <div className="progressReadingContent">
      <ProgressBar now={currentPercentage}  className="progressReadingBar" />
    </div>
  );
};
