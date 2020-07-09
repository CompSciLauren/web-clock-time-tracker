import React, { useState } from "react";
import Card from "terra-card";
import Heading from "terra-heading";
import TimeCodeProject from "../ViewTimeCodes/TimeCodeProject";
import "../../styles/ViewTimeCodes.css";

const TimeCodeStatSummary = () => {
  return (
    <Card variant="default" style={{ maxWidth: "40vw", margin: "auto" }}>
      <div className="my-time-codes-container">
        <Heading level={1} size="large" weight={700}>
          This Week's Time Code Summary
        </Heading>
        <TimeCodeProject
          timeCode="19378847"
          projectTitle="Fancy Project"
          tag="In-Progress"
          timeSpent="4.5 hours"
        />
        <TimeCodeProject
          timeCode="39572956"
          projectTitle="Classified"
          tag="Not Started"
          timeSpent="8 hours"
        />
        <TimeCodeProject
          timeCode="82659301"
          projectTitle="DevOps Magic"
          tag="In-Progress"
          timeSpent="6.35 hours"
        />
      </div>
    </Card>
  );
};

export default TimeCodeStatSummary;
