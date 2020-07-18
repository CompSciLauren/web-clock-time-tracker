import React, { useState } from "react";
import "../pages/clock/clock.css";
import Card from "terra-card";
import Button from "terra-button/lib/Button";
import InputField from "terra-form-input/lib/InputField";
import Select from "terra-form-select";
import NotificationBanner from "../components/NotificationBanner.js";

const TimeCodeClockComponent = (props) => {
  const testDate = new Date();

  // state declarations
  // can set default values from saved preferences here
  const [focusedTimeCode, setFocusedTimeCode] = useState("Time Code");
  const [candidateTimeCode, setCandidateTimeCode] = useState();
  const [timeCodes, setTimeCodes] = useState([
    { id: 0, timeCode: "10203704" },
    { id: 1, timeCode: "99999999" },
  ]);
  const [dateLog, setDateLog] = useState(testDate);
  const [timeAddLog, setTimeAddLog] = useState();

  // eslint-disable-next-line
  const [mockData, setMockData] = useState([
    {
      id: 0,
      timeCode: "10203704",
      timeSpent: "08:42",
    },
    {
      id: 1,
      timeCode: "99999999",
      timeSpent: "15:39",
    },
  ]);

  //'1st Time Code', '2nd Time Code', '3rd Time Code', '4th Time Code'

  const addTimeCode = (event) => {
    event.preventDefault();
    //only add to timeCodes if unique
    let repeatTimeCode = timeCodes.some(function (item) {
      return item.timeCode === candidateTimeCode;
    });

    if (!repeatTimeCode) {
      setTimeCodes([
        ...timeCodes,
        {
          id: timeCodes.length,
          timeCode: candidateTimeCode,
        },
      ]);

      fetch("http://localhost:8000/api/timecodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: candidateTimeCode,
          description: "Omg it's a title",
        }),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Error. That time code already exists");
    }
  };

  /**
   * return the id of the focusedTimeCode
   */
  const getTimeCodeID = () => {
    let focusedTimeCodeID;
    // look up time code ID based on time code
    try {
      //find the id of the focusedTimeCode
      if (focusedTimeCode)
        focusedTimeCodeID = mockData.find(
          (entry) => entry.timeCode === focusedTimeCode
        ).id;

      return focusedTimeCodeID;
    } catch {
      //do nothing
    }
  };

  /**
   * return the total time logged on the focused time code
   */
  const getTimeSpent = () => {
    let focusedTimeCodeID = getTimeCodeID();
    // look up time code ID based on time code
    try {
      //return time spent of focusedTimeCode
      if (focusedTimeCodeID !== null)
        return mockData[focusedTimeCodeID].timeSpent;
      else return;
    } catch {
      //do nothing
    }
  };

  /**
   * create a new/additional log of time for the focused timeCode
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    //dateLog    timeAddLog      focusedTimeCode
    // new Date(0, 0, 0, clockOutHour, clockOutMin, 0, 0);
    console.log("dateLog: ", dateLog);
    console.log("typeof dateLog: ", typeof dateLog);
    console.log("timeAddLog: ", timeAddLog);
    // let tempClockIn = new Date(dateLog, 0, 0, 0, 0);
    // let tempClockOut = new Date(dateLog, timeAddLog, 0, 0, 0);
    // console.log("tempClockIn: ", tempClockIn);
    // console.log("tempClockOut: ", tempClockOut);
  };

  /**
   * update which timeCode is in focus
   */
  const handleDropDown = (timeCode) => {
    setFocusedTimeCode(timeCode);
  };

  /**
   * Record current time to record start of a Time Code log
   */
  const handleStart = (event) => {
    event.preventDefault();
    // string var to print message
    const now = new Date();

    // create new Start Code Log for selected time code
    console.log("Selected drop down id: ", focusedTimeCode);

    console.log("Selected TimeCodes", timeCodes[focusedTimeCode]);

    fetch("http://localhost:8000/api/timeEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@gmail.com",
        timeCode: focusedTimeCode,
        timeIn: now.toISOString(),
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Record current time to record end of a Time Code log
   */
  const handleStop = (event) => {
    event.preventDefault();
    // string var to print message
    const now = new Date();

    fetch("http://localhost:8000/api/timeEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@gmail.com",
        timeCode: focusedTimeCode,
        timeOut: now.toISOString(),
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card
      variant="raised"
      style={{ marginBottom: "20px", paddingBottom: "16px" }}
    >
      <NotificationBanner
        type="error"
        message="This feature is not fully functional on the website yet."
      />
      <main id="main-content" style={{ width: "50%", margin: "auto" }}>
        <h1>Time Code Tracker</h1>

        <form onSubmit={addTimeCode}>
          <input type="submit" value="Submit" />
          <InputField
            label="Create a New Time Code"
            inputId="createNewTimeCode"
            type="number"
            min="0"
            placeholder="10203704"
            onChange={(e) => setCandidateTimeCode(e.target.value)}
          />
        </form>

        <h2>Stopwatch</h2>
        <label>Current Time Code</label>
        <Select
          variant="default"
          defaultValue="Time Code"
          required={true}
          onSelect={handleDropDown}
          style={{ width: "40%", margin: "auto" }}
        >
          {timeCodes.map((item) => (
            <Select.Option
              key={item.id}
              display={item.timeCode}
              value={item.timeCode}
            />
          ))}
        </Select>

        {/* <DropdownButton 
        variant="ghost"
        label={focusedTimeCode}
      >
      {timeCodes.map(item => (
        <Item 
          key={item.id} 
          label={item.value} 
          metaData={item.value}
          onSelect={handleDropDown} 
        />
      ))}
      </DropdownButton> */}

        <br />

        <Button
          variant="action"
          text="Start"
          onClick={handleStart}
          style={{ marginRight: "12px" }}
        />
        <Button
          variant="action"
          text="Stop"
          onClick={handleStop}
          style={{ marginLeft: "12px" }}
        />

        <br />
        <br />
        <label>Time spent on this Time Code: {getTimeSpent()}</label>
        <br />
        <br />
        <h2>Add New Entry</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Select Date to Add Time Log"
            inputId="selectDateForTimeLog"
            type="date"
            required
            onChange={(e) => setDateLog(e.target.value)}
          />
          <InputField
            label="Total time spent for selected Time Code"
            inputId="timeSpentForTimeCode"
            type="number"
            min="0"
            step="0.01"
            onChange={(e) => setTimeAddLog(e.target.value)}
          />

          <InputField
            label="Submit"
            inputId="timeCodeClockSubmit"
            type="submit"
            value="Submit"
          />
        </form>
      </main>
    </Card>
  );
};

export default TimeCodeClockComponent;
