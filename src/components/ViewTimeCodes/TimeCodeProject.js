import React from "react";
import PropTypes from "prop-types";
import Select from "terra-form-select";
import Badge from "terra-badge";

const TimeCodeProject = (props) => {
  let currentIntent = "info";
  if (props.tag === "Completed") {
    currentIntent = "positive";
  }

  function CurrentStatus() {
    return !props.timeSpent ? (
      <Select
        variant="default"
        defaultValue={props.tag}
        required={true}
        style={{ height: "36px" }}
      >
        <Select.Option value="notStarted" display="Not Started" />
        <Select.Option value="inProgress" display="In Progress" />
        <Select.Option value="completed" display="Completed" />
      </Select>
    ) : (
      <Badge text={props.tag} intent={currentIntent} size="medium" />
    );
  }

  return (
    <div className="time-code-project">
      <p>{props.projectTitle}</p>
      <CurrentStatus />
      <p>{props.timeCode}</p>
      <p>{props.timeSpent}</p>
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
