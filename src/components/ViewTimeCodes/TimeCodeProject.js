import React from "react";
import PropTypes from "prop-types";
import Select from "terra-form-select";

const TimeCodeProject = (props) => {
  return (
    <div className="time-code-project">
      <p>{props.timeCode}</p>
      <p>{props.projectTitle}</p>
      <Select
        variant="default"
        defaultValue="notStarted"
        value={props.tag}
        required={true}
        style={{ height: "36px" }}
      >
        <Select.Option value="notStarted" display="Not Started" />
        <Select.Option value="inProgress" display="In Progress" />
        <Select.Option value="completed" display="Completed" />
      </Select>
    </div>
  );
};

const propTypes = {
  timeCode: PropTypes.string,
  projectTitle: PropTypes.string,
  tag: PropTypes.string,
};

TimeCodeProject.propTypes = propTypes;

export default TimeCodeProject;
