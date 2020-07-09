import React from "react";
import PropTypes from "prop-types";
import Tag from "terra-tag";

const TimeCodeProject = (props) => {
  return (
    <div className="time-code-project">
      <p>{props.timeCode}</p>
      <p>{props.projectTitle}</p>
      <Tag text="In-Progress" />
    </div>
  );
};

const propTypes = {
  exampleProp: PropTypes.string,
};

TimeCodeProject.propTypes = propTypes;

export default TimeCodeProject;
