import React from "react";
import TimeCodeStatSummary from "../../components/TimeCodeStatSummary/TimeCodeStatSummary.js";
import Error from "../../components/NotificationBanner.js";

const statistics = () => {
  return (
    <div>
      <Error
        type="error"
        message="This feature is not fully functional on the website yet."
      />
      <TimeCodeStatSummary />
    </div>
  );
};

export default statistics;
