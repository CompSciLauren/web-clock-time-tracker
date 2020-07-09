
import React, { useState }  from "react";


// import styles from './clock.css';
// import classNames from 'classnames/bind';


// mangle class names
// const cx = classNames.bind(styles);




const ClockComponent = (props) => {
  // vars
  // const defaultHoursNeeded="8";
  // const defaultHoursWorked="16.19";
  const defaultTime="13:30";
  const clockOutTime= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // state declarations
  // can set default values from saved preferences here
  const [totalHoursNeeded, setTotalHoursNeeded] = useState();
  const [hoursWorked, setHoursWorked] = useState();
  const [lastClockIn, setLastClockIn] = useState(defaultTime);


  // calculate time to clock out
  
  /**
   * Do stuff with the user submitted hours needed, hours worked, and last clock in
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // string var to print message
    let message = "";
    
    if(totalHoursNeeded)
      message += `Submitting totalHoursNeeded ${totalHoursNeeded}\n`;
    else
      message += `Error. Please enter Total Hours Needed\n`;

    if(hoursWorked)
     message += `Submitting hoursWorked ${hoursWorked}\n`;
    else
      message += `Error. Please enter how many Hours Worked So Far\n`;
    
    if(lastClockIn)
      message += `Submitting lastClockIn ${lastClockIn}\n`;
    else
      message += `Error. Please enter when you Last Clocked In\n`;

    alert(message);
  };

  return (
    <div className="clock-container">
      <main id="main-content">
        <div>Hello Clock Page</div>

        <form onSubmit={handleSubmit}>
          <label>
            Total Hours Needed: 
            <input 
              type="number" 
              placeholder="8"
              value={totalHoursNeeded} 
              onChange={e => setTotalHoursNeeded(e.target.value)} 
            />
          </label>

          <br />

          <label>
            Hours Worked So Far: 
            <input 
              type="number" 
              placeholder="16.67"
              value={hoursWorked} 
              onChange={e => setHoursWorked(e.target.value)} 
            />
          </label>

          <br />

          <label>
            Time of Last Clock In: 
            <input 
              type="time" 
              placeholder="13:30"
              onfocus="(this.type='date')"
              value={lastClockIn}
              onChange={e => setLastClockIn(e.target.value)} 
            />
          </label>

          <br />
          <input type="submit" value="Submit" />
        </form>

        <br />

        <div id="clock-out-time">
          Clock Out Time is {clockOutTime}
        </div>

      </main>
    </div>
  );
}

export default ClockComponent;

