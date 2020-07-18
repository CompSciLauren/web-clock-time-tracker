import React, { useState, useEffect } from "react";
import Card from "terra-card";
import Button from "terra-button/lib/Button";
import TimeInput from "terra-time-input/lib/TimeInput";
import TimeUtil from "terra-time-input/lib/TimeUtil";
import NotificationBanner from "../components/NotificationBanner.js";

const ReminderAlarm = () => {
  const [alarmTime, setAlarmTime] = useState("");
  const [ifAlarmIsSet, setIfAlarmIsSet] = useState(false);

  useEffect(() => {
    if (ifAlarmIsSet) {
      setInterval(() => checkAlarmClock(alarmTime), 1000);
    }

    function checkAlarmClock(_alarmTime) {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
      });
      if (_alarmTime !== "" && _alarmTime) {
        if (currentTime === _alarmTime) {
          createNotification();
          setAlarmTime("");
          setIfAlarmIsSet(false);
        }
      }
    }

    function createNotification() {
      Notification.requestPermission(function () {
        new Notification("Clock out!", {
          body: "It is time to clock out now!",
        });
      });
    }
  }, [alarmTime, ifAlarmIsSet]);

  function handleRemindMe() {
    alert(
      "Reminder set! Remember not to close out your browser or you won't receive the reminder to clock out."
    );
    setIfAlarmIsSet(true);
  }

  function handleAlarmTimeChange(event, alarmTime) {
    setAlarmTime(alarmTime);
  }

  return (
    <Card
      variant="raised"
      style={{ marginBottom: "20px", paddingBottom: "16px" }}
    >
      <NotificationBanner
        type="warning"
        message="This feature only works on mobile devices, and you must leave this specific page open in your browser. You will not be notified if you are on a desktop or anything else. You will not be notified if you close out the page or browser, or if you click on a different page of this website."
      />
      <main id="main-content" style={{ width: "50%", margin: "auto" }}>
        <h1>Set a Reminder</h1>
        <TimeInput
          name="time-input-value"
          value={alarmTime}
          showSeconds
          onChange={handleAlarmTimeChange}
          variant={TimeUtil.FORMAT_12_HOUR}
        />
        <Button
          variant="action"
          text="Remind Me"
          onClick={handleRemindMe}
          style={{ marginRight: "12px" }}
        />
      </main>
    </Card>
  );
};

export default ReminderAlarm;
