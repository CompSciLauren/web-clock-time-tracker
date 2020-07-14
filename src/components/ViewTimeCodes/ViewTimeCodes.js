import React, { useState } from "react";
import Button from "terra-button";
import Checkbox from "terra-form-checkbox";
import Card from "terra-card";
import InputField from "terra-form-input/lib/InputField";
import TimeCodeProject from "./TimeCodeProject";
import "../../styles/ViewTimeCodes.css";

function RevealCompletedTimeCodes(props) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div className="time-code-project-container">
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
  );
}

const ViewTimeCodes = () => {
  const [inputTimeCodeValue, setInputTimeCodeValue] = useState("");
  const [inputProjectTitleValue, setInputProjectTitleValue] = useState("");

  const [, setInputStatusValue] = useState("notStarted");
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

  const handleRevealCompletedTimeCodesClick = () => {
    setInputRevealCompletedTimeCodes(!inputRevealCompletedTimeCodes);
  };

  return (
    <Card
      variant="raised"
      style={{ marginBottom: "20px", paddingBottom: "16px" }}
    >
      <main id="main-content" style={{ width: "70%", margin: "auto" }}>
        <div className="my-time-codes-container">
          <h1>My Time Codes</h1>
          <div className="time-code-project-container">
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
          </div>
          <div className="my-time-codes-item">
            <InputField
              label="Project Title"
              inputId="inputProjectTitle"
              maxWidth="140px"
              placeholder="My Project"
              onChange={setProjectTitleValue}
            />
            <InputField
              label="Time Code"
              inputId="inputTimeCode"
              maxWidth="140px"
              placeholder="10203704"
              onChange={setTimeCodeValue}
            />
            <div className="add-project-button-container">
              <Button
                style={{ height: "min-content" }}
                text="Add"
                variant="action"
                type="button"
                isBlock
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
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox
            labelText="Show Completed Time Codes"
            onChange={handleRevealCompletedTimeCodesClick}
            isInline={false}
            style={{ textAlign: "left", marginBottom: "16px" }}
          />
          <RevealCompletedTimeCodes isVisible={inputRevealCompletedTimeCodes} />
        </div>
      </main>
    </Card>
  );
};

export default ViewTimeCodes;
