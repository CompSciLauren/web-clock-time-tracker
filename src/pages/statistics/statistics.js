import React from "react";
import TimeCodeStatSummary from "../../components/TimeCodeStatSummary/TimeCodeStatSummary.js";
import Error from "../../components/Error.js";

const statistics = () => {
  return (
    <div>
      <Error message="This feature is not fully functional on the website yet." />
      <TimeCodeStatSummary />
    </div>
  );
};

export default statistics;
