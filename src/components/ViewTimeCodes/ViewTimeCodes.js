import React, { useState } from "react";
import Button from "terra-button";
import CollapsibleMenuView from "terra-collapsible-menu-view";
import Card from "terra-card";
import Heading from "terra-heading";
import InputField from "terra-form-input/lib/InputField";
import TimeCodeProject from "./TimeCodeProject";
import "../../styles/ViewTimeCodes.css";
import Select from "terra-form-select";

function RevealCompletedTimeCodes(props) {
  console.log(props.isVisible);
  return (
    <div>
      {props.isVisible}
      {props.isVisible && (
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
      )}
    </div>
  );
}

const ViewTimeCodes = () => {
  const [inputTimeCodeValue, setInputTimeCodeValue] = useState("");
  const [inputProjectTitleValue, setInputProjectTitleValue] = useState("");
  const [inputStatusValue, setInputStatusValue] = useState("notStarted");
  const [
    inputRevealCompletedTimeCodes,
    setInputRevealCompletedTimeCodes,
  ] = useState(false);

  const setState = (anObject) => {
    console.log("anObject:\n", anObject);
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
    console.log("value", value);
    setState({ inputStatusValue: value });
  };

  const handleRevealCompletedTimeCodesClick = (event, isSelected) => {
    setState({
      inputRevealCompletedTimeCodes: isSelected,
    });
  };

  return (
    <Card
      variant="raised"
      style={{ marginBottom: "20px", paddingBottom: "16px" }}
    >
      <main id="main-content" style={{ width: "70%", margin: "auto" }}>
        <div className="my-time-codes-container">
          {/* <Heading level={1} size="large" weight={700}> */}
          <h1>My Time Codes</h1>
          {/* </Heading> */}
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
                fetch("http://localhost:8000/api/timecodes", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: inputTimeCodeValue,
                    description: inputProjectTitleValue,
                  }),
                })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  })
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
      </main>
    </Card>
  );
};

export default ViewTimeCodes;
