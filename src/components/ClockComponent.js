import React, { useState } from "react";
import Card from "terra-card";
import InputField from "terra-form-input/lib/InputField";
import "../pages/clock/clock.css";

const defaultTime = "13:30";
const defaultClockOutTime = new Date(0, 0, 0, 17, 30, 0, 0);

/**
 * calculate when user should clock out
 */
const calcClockOut = ({ lastClockIn, totalHoursNeeded, hoursWorked } = {}) => {
  let clockOutMin = 0;
  let clockOutHour = 0;
  // get hour and min of last clock in to use for math
  let [clockInHour, clockInMin] = lastClockIn.split(":");

  //calculate min
  clockOutMin = (totalHoursNeeded - hoursWorked) * 60 + parseInt(clockInMin);
  //math.floor rounds down to closets int.
  clockOutHour = Math.floor(clockOutMin / 60) + parseInt(clockInHour);
  //get only the min
  clockOutMin = clockOutMin % 60;

  //set to true so that clock out time renders
  return new Date(0, 0, 0, clockOutHour, clockOutMin, 0, 0);
};

const ClockComponent = (props) => {
  // state declarations
  // can set default values from saved preferences here
  const [totalHoursNeeded, setTotalHoursNeeded] = useState(8.0);
  const [hoursWorked, setHoursWorked] = useState(0.0);
  const [lastClockIn, setLastClockIn] = useState(defaultTime);
  const [clockOut, setClockOut] = useState(defaultClockOutTime);

  /**
   * Do stuff with the user submitted hours needed, hours worked, and last clock in
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // string var to print message
    let message = "";

    if (totalHoursNeeded)
      message += `Submitting totalHoursNeeded ${totalHoursNeeded}\n`;
    else message += `Error. Please enter Total Hours Needed\n`;

    if (hoursWorked) message += `Submitting hoursWorked ${hoursWorked}\n`;
    else message += `Error. Please enter how many Hours Worked So Far\n`;

    if (lastClockIn) message += `Submitting lastClockIn ${lastClockIn}\n`;
    else message += `Error. Please enter when you Last Clocked In\n`;

    // calculate clock out time
    if (
      totalHoursNeeded !== null &&
      hoursWorked !== null &&
      lastClockIn !== null
    )
      setClockOut(calcClockOut({ lastClockIn, hoursWorked, totalHoursNeeded }));
    else alert(message);
  };

  return (
    <Card
      variant="raised"
      style={{ marginBottom: "20px", paddingBottom: "16px" }}
    >
      <main id="main-content" style={{ width: "50%", margin: "auto" }}>
        <h1>Web Clock Time Tracker</h1>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Total Hours Needed"
            inputId="totalHoursNeeded"
            type="number"
            step=".01"
            min="0"
            placeholder="8.00"
            value={totalHoursNeeded}
            onChange={(e) => setTotalHoursNeeded(e.target.value)}
          />

          <br />

          <InputField
            label="Hours Worked So Far"
            inputId="hoursWorked"
            type="number"
            step="0.01"
            min="0"
            placeholder="4.67"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
          />

          <br />

          <InputField
            label="Time of Last Clock In"
            inputId="lastClockIn"
            type="time"
            placeholder="13:30"
            onChange={(e) => setLastClockIn(e.target.value)}
          />

          <br />
          <InputField
            label="Submit"
            type="submit"
            value="Submit"
            inputId="clockComponentSubmit"
          />
        </form>

        <br />

        <div id="clock-out-time">
          Clock Out Time is{" "}
          {clockOut.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </main>
    </Card>
  );
};

export default ClockComponent;
