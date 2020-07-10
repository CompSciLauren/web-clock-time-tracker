
import React, { useState }  from "react";
import "../pages/clock/clock.css";
import DropdownButton, { Item } from 'terra-dropdown-button';
import Button from 'terra-button/lib/Button';
import InputField from "terra-form-input/lib/InputField";
import Select from "terra-form-select";


// import styles from './clock.css';
// import classNames from 'classnames/bind';


// mangle class names
// const cx = classNames.bind(styles);




const TimeCodeClockComponent = (props) => {
  // vars
  // const testDate = new Date();

  // state declarations
  // can set default values from saved preferences here
  const [focusedTimeCode, setFocusedTimeCode] = useState('Time Code');
  const [candidateTimeCode, setCandidateTimeCode] = useState();
  const [timeCodes, setTimeCodes] = useState([{id:0, timeCode:'10203704'}, {id:1, timeCode:'99999999'}]);

  const [mockData, setMockData] = useState([
    {
      id: 0,
      timeCode: "10203704",
      timeSpent: "08:42"
    },
    {
      id: 1,
      timeCode: "99999999",
      timeSpent: "15:39"
    }
  ]);


  //'1st Time Code', '2nd Time Code', '3rd Time Code', '4th Time Code'
  
  const addTimeCode = (event) => {
    event.preventDefault();
    //only add to timeCodes if unique
    let repeatTimeCode = timeCodes.some(function(item) {
      return item.timeCode === candidateTimeCode;
    });

    if(!repeatTimeCode) {
      setTimeCodes([
        ...timeCodes,
        {
          id: timeCodes.length,
          timeCode: candidateTimeCode
        }
      ]);
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
    try{
    //find the id of the focusedTimeCode
    if(focusedTimeCode)
      focusedTimeCodeID = mockData.find(entry => entry.timeCode === focusedTimeCode).id;

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
    try{
    //return time spent of focusedTimeCode
    if(focusedTimeCodeID !== null)
      return mockData[focusedTimeCodeID].timeSpent;
    else
      return;
    } catch {
      //do nothing
    };
  };


  /**
   * create a new/additional log of time for the focused timeCode
   */
  const addTimeLog = () => {
    
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
      <Select
        variant="default"
        defaultValue="Time Code"
        required={true}
        onSelect={handleDropDown} 
      >
      {timeCodes.map(item => (
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

      <Button text="Start" onClick={handleStart} />
      <Button text="Stop" onClick={handleStop} />
      
      <br />

    <label>Time spent on this Time Code: {getTimeSpent()}</label>

      <br />

      <Button text="Add new time to Code Log" onClick={addTimeLog()}/>




    </div>
  );
}

export default TimeCodeClockComponent;

