import React from "react";
import ReminderAlarm from "../../components/ReminderAlarm";
import ClockComponent from "../../components/ClockComponent";
import TimeCodeClockComponent from "../../components/TimeCodeClockComponent";

const ClockContainer = (props) => {
  return (
    <div>
      <ClockComponent />
      <br />
      <ReminderAlarm />
      <br />
      <TimeCodeClockComponent />
    </div>
  );
};

export default ClockContainer;
