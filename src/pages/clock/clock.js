import React from "react";
import ReminderAlarm from "../../components/ReminderAlarm";
import ClockComponent from "../../components/ClockComponent";
import TimeCodeClockComponent from "../../components/TimeCodeClockComponent";
import NotificationBanner from "../../components/NotificationBanner.js";

const ClockContainer = (props) => {
  return (
    <div>
      <ClockComponent />
      <br />
      <NotificationBanner
        type="warning"
        message="This feature only works on mobile devices, and you must leave this specific page open in your browser. You will not be notified if you are on a desktop or anything else. You will not be notified if you close out the page or browser, or if you click on a different page of this website."
      />
      <ReminderAlarm />
      <br />
      <NotificationBanner
        type="error"
        message="This feature is not fully functional on the website yet."
      />
      <TimeCodeClockComponent />
    </div>
  );
};

export default ClockContainer;
