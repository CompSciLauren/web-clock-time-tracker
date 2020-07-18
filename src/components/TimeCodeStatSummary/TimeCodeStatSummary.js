import React from "react";
import Heading from "terra-heading";
import WeekdayLayout from "./WeekdayLayout";
import NotificationBanner from "../../components/NotificationBanner.js";
import "../../styles/ViewTimeCodes.css";

const TimeCodeStatSummary = () => {
  return (
    <div className="my-time-codes-container">
      <NotificationBanner
        type="error"
        message="This feature is not fully functional on the website yet."
      />
      <Heading level={1} size="large" weight={700}>
        This Week's Time Code Summary
      </Heading>
      <WeekdayLayout />
    </div>
  );
};

export default TimeCodeStatSummary;
