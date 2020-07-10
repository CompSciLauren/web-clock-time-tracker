import React, { useState } from "react";
import Button from "terra-button";
import CollapsibleMenuView from "terra-collapsible-menu-view";
import Card from "terra-card";
import Heading from "terra-heading";
import InputField from "terra-form-input/lib/InputField";
import TimeCodeProject from "./TimeCodeProject";
import "../../styles/ViewTimeCodes.css";
import Select from "terra-form-select";

const ViewTimeCodes = () => {
  const [inputTimeCodeValue, setInputTimeCodeValue] = useState("");
  const [inputProjectTitleValue, setInputProjectTitleValue] = useState("");
  const [inputStatusValue, setInputStatusValue] = useState("notStarted");
  const [
    inputRevealCompletedTimeCodes,
    setInputRevealCompletedTimeCodes,
  ] = useState(false);

  const setState = (anObject) => {
    if (anObject.hasOwnProperty("inputTimeCodeValue")) {
      setInputTimeCodeValue(anObject.inputTimeCodeValue);
    } else if (anObject.hasOwnProperty("inputProjectTitleValue")) {
      setInputProjectTitleValue(anObject.inputProjectTitleValue);
    } else if (anObject.hasOwnProperty("inputStatusValue")) {
      setInputStatusValue(anObject.inputStatusValue);
    } else if (anObject.hasOwnProperty("inputRevealCompletedTimeCodes")) {
      setInputRevealCompletedTimeCodes(anObject.inputRevealCompletedTimeCodes);
    } else {
      console.log("Error, not an option. Got:", anObject);
    }
  };

  const setTimeCodeValue = (value) => {
    setState({ inputTimeCodeValue: value.target.value });
  };

  const setProjectTitleValue = (value) => {
    setState({ inputProjectTitleValue: value.target.value });
  };

  const setStatusValue = (value) => {
    setState({ inputStatusValue: value });
  };

  const handleRevealCompletedTimeCodesClick = (value) => {
    setState({
      inputRevealCompletedTimeCodes: value.target._valueTracker.getValue(),
    });
  };

  function RevealCompletedTimeCodes(props) {
    console.log(props.isVisible);
    return (
      <div>
        {props.isVisible ? (
          <div>
            <br />
            <br />
            <br />
            <TimeCodeProject
              timeCode="1029372"
              projectTitle="This One Was Bad"
              tag="Completed"
            />
            <TimeCodeProject
              timeCode="4928448"
              projectTitle="Awesome One"
              tag="Completed"
            />
            <TimeCodeProject
              timeCode="92847634"
              projectTitle="Wow a project"
              tag="Completed"
            />
          </div>
        ) : null}
      </div>
    );
  }

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
            label="Project Title"
            inputId="inputProjectTitle"
            maxWidth="140px"
            placeholder="My Project"
            onChange={setProjectTitleValue}
          />
          <Select
            variant="default"
            defaultValue="notStarted"
            required={true}
            style={{ height: "36px" }}
            onChange={setStatusValue}
          >
            <Select.Option value="notStarted" display="Not Started" />
            <Select.Option value="inProgress" display="In Progress" />
            <Select.Option value="completed" display="Completed" />
          </Select>
          <InputField
            label="Time Code"
            inputId="inputTimeCode"
            maxWidth="140px"
            placeholder="10203704"
            onChange={setTimeCodeValue}
          />
          <Button
            text="Add"
            variant="action"
            type="button"
            onClick={() =>
              console.log(
                "User submitted this info:",
                inputTimeCodeValue,
                inputProjectTitleValue,
                inputStatusValue
              )
            }
          />
        </div>
      </div>
      <CollapsibleMenuView.Toggle
        isSelectable={true}
        text="Show Completed Time Codes"
        shouldCloseOnClick={true}
        style={{ textAlign: "left" }}
        onChange={handleRevealCompletedTimeCodesClick}
      />
      <RevealCompletedTimeCodes isVisible={inputRevealCompletedTimeCodes} />
    </Card>
  );
};

export default ViewTimeCodes;
