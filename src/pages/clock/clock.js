import React from "react";
import ReminderAlarm from "../../components/ReminderAlarm/ReminderAlarm";
import ClockComponent from "../../components/ClockComponent";
import TimeCodeClockComponent from "../../components/TimeCodeClockComponent";
import Error from "../../components/Error.js";

const ClockContainer = (props) => {
  return (
    <div>
      <ClockComponent />
      <br />
      <Error message="This feature is not fully functional on the website yet." />
      <ReminderAlarm />
      <br />
      <Error message="This feature is not fully functional on the website yet." />
      <TimeCodeClockComponent />
    </div>
  );
};

export default ClockContainer;
