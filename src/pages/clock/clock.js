import React from "react";
import ReminderAlarmComponent from "../../components/ReminderAlarm/ReminderAlarmComponent";
import ClockComponent from "../../components/ClockComponent";
import TimeCodeClockComponent from "../../components/TimeCodeClockComponent";
import Error from "../../components/Error.js";

const ClockContainer = (props) => {
  return (
    <div>
      <ClockComponent />
      <br />
      <Error message="This feature is not fully functional on the website yet." />
      <ReminderAlarmComponent />
      <br />
      <Error message="This feature is not fully functional on the website yet." />
      <TimeCodeClockComponent />
    </div>
  );
};

export default ClockContainer;
