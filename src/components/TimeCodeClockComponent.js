
import React, { useState }  from "react";
import "../pages/clock/clock.css";
import DropdownButton, { Item } from 'terra-dropdown-button';
import Button from 'terra-button/lib/Button';
import InputField from "terra-form-input/lib/InputField";


// import styles from './clock.css';
// import classNames from 'classnames/bind';


// mangle class names
// const cx = classNames.bind(styles);




const TimeCodeClockComponent = (props) => {
  // vars

  // state declarations
  // can set default values from saved preferences here
  const [focusedTimeCode, setFocusedTimeCode] = useState('Time Code');
  const [candidateTimeCode, setCandidateTimeCode] = useState();
  const [timeCodes, setTimeCodes] = useState([{id:0, value:'test1'}, {id:1, value:'test2'}]);

  // const [mockData, setMockData] = useState([]);


  //'1st Time Code', '2nd Time Code', '3rd Time Code', '4th Time Code'
  
  const addTimeCode = (event) => {
    event.preventDefault();
    //only add to timeCodes if unique
    let repeatTimeCode = timeCodes.some(function(item) {
      return item.value === candidateTimeCode;
    });

    if(!repeatTimeCode) {
      setTimeCodes([
        ...timeCodes,
        {
          id: timeCodes.length,
          value: candidateTimeCode
        }
      ]);
    } else {
      alert("Error. That time code already exists");
    }
  };


  /**
   * Record current time to record start of a Time Code log
   */
  const handleDropDown = (value) => {
    console.log("thingy im trying to print ", value);
  };
  
  
  /**
   * Record current time to record start of a Time Code log
   */
  const handleStart = (event) => {
    event.preventDefault();
    // string var to print message

    // create new Start Code Log for selected time code
    console.log('Selected drop down id: ', focusedTimeCode)
    
    console.log('Selected TimeCodes', timeCodes[focusedTimeCode]);

    alert('Start');

  };

  /**
   * Record current time to record end of a Time Code log
   */
  const handleStop = (event) => {
    event.preventDefault();
    // string var to print message
    
    alert('Stop');

  };

  return (
    <div className="time-code-clock-component">
      <span id='ClockCodeTitle'>Time Code Tracker</span>

      <form onSubmit={addTimeCode}>
        <label>
          Create a New Time Code 
        </label>
        <InputField 
          type="number" 
          min='0'
          placeholder="10203704"
          value={candidateTimeCode} 
          onChange={e => setCandidateTimeCode(e.target.value)} 
        />
      </form>

      <label>
        Current Time Code 
      </label>
      <DropdownButton 
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
      </DropdownButton>

      <br />

      <Button text="Start" onClick={handleStart} />
      <Button text="Stop" onClick={handleStop} />
      
      <br />

      <label>Time spent on this Time Code: </label>

      <br />

      <Button text="Add new time to Code Log" />


    </div>
  );
}

export default TimeCodeClockComponent;

