
import React from "react";
import ReminderAlarmComponent from "../../components/ReminderAlarm/ReminderAlarmComponent";
import ClockComponent from "../../components/ClockComponent";
import TimeCodeClockComponent from "../../components/TimeCodeClockComponent";



const ClockContainer = (props) => {
  return(
    <div>
      <div>Hello Clock Page</div>
      <br />
      <ClockComponent />
      <br />
      <ReminderAlarmComponent />
      <br />
      <TimeCodeClockComponent />
    </div>
  );
    
}

export default ClockContainer;