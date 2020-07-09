import React from "react";
import PropTypes from "prop-types";
import Button from "terra-button";
import TimeCodeProject from "./TimeCodeProject";
import "../../styles/ViewTimeCodes.css";

const ViewTimeCodes = (props) => {
  return (
    <div className="my-time-codes-container">
      <h2>My Time Codes</h2>
      <Button text="Add Time Code" variant="action" type="button" />
      <TimeCodeProject timeCode="19378847" projectTitle="Fancy Project" />
      <TimeCodeProject timeCode="39572956" projectTitle="Classified" />
      <TimeCodeProject timeCode="82659301" projectTitle="DevOps Magic" />
      <Button text="View Past Time Codes" variant="action" type="button" />
    </div>
  );
};

const propTypes = {
  exampleProp: PropTypes.string,
};

ViewTimeCodes.propTypes = propTypes;

export default ViewTimeCodes;
