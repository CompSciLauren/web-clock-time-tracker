
import React from "react";
import ClockComponent from "../../components/ClockComponent";
import TimeCodeClockComponent from "../../components/TimeCodeClockComponent";



const ClockContainer = (props) => {
  return(
    <div>
      <div>Hello Clock Page</div>
      <br />
      <ClockComponent />
      <br />
      <TimeCodeClockComponent />
    </div>
  );
    
}

export default ClockContainer;