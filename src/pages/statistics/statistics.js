import React from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import TimeCodeStatSummary from "../../components/TimeCodeStatSummary/TimeCodeStatSummary.js";

const Statistics = () => {
  const auth = useAuth();

  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <TimeCodeStatSummary />
    </div>
  );
};

export default Statistics;
