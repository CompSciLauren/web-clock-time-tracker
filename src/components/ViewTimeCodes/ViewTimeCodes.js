import React from "react";
import PropTypes from "prop-types";
import Button from "terra-button";
import CollapsibleMenuView from "terra-collapsible-menu-view";
import Card from "terra-card";
import Heading from "terra-heading";
import InputField from "terra-form-input/lib/InputField";
import TimeCodeProject from "./TimeCodeProject";
import "../../styles/ViewTimeCodes.css";
import Select from "terra-form-select";

const ViewTimeCodes = (props) => {
  return (
    <Card variant="default" style={{ maxWidth: "40vw", margin: "auto" }}>
      <div className="my-time-codes-container">
        <Heading level={1} size="large" weight={700}>
          My Time Codes
        </Heading>
        <TimeCodeProject
          timeCode="19378847"
          projectTitle="Fancy Project"
          tag="In-Progress"
        />
        <TimeCodeProject
          timeCode="39572956"
          projectTitle="Classified"
          tag="Not Started"
        />
        <TimeCodeProject
          timeCode="82659301"
          projectTitle="DevOps Magic"
          tag="In-Progress"
        />
        <div className="my-time-codes-item">
          <InputField
            inputId="inputTimeCode"
            maxWidth="140px"
            placeholder="10203704"
          />
          <InputField
            inputId="inputProjectTitle"
            maxWidth="140px"
            placeholder="My Project"
          />
          <Select
            variant="default"
            defaultValue="notStarted"
            required={true}
            style={{ height: "36px" }}
          >
            <Select.Option value="notStarted" display="Not Started" />
            <Select.Option value="inProgress" display="In Progress" />
            <Select.Option value="completed" display="Completed" />
          </Select>
          <Button
            text="Add"
            variant="action"
            type="button"
            onClick={() => alert("Adding this info:")}
          />
        </div>
      </div>
      <CollapsibleMenuView.Toggle
        isSelectable={true}
        text="Show Completed Time Codes"
        shouldCloseOnClick={true}
        style={{ textAlign: "left" }}
      />
    </Card>
  );
};

const propTypes = {
  exampleProp: PropTypes.string,
};

ViewTimeCodes.propTypes = propTypes;

export default ViewTimeCodes;
