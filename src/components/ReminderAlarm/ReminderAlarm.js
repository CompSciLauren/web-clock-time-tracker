import React from "react";
import Card from "terra-card";
import Button from "terra-button/lib/Button";

const ReminderAlarm = () => {
  function handleRequestToAllowNotifications() {
    // function to actually ask the permissions
    function handlePermission(permission) {
      // Whatever the user answers, we make sure Chrome stores the information
      if (!("permission" in Notification)) {
        Notification.permission = permission;
      }

      // set the button to shown or hidden, depending on what the user answers
      // if (
      //   Notification.permission === "denied" ||
      //   Notification.permission === "default"
      // ) {
      //   notificationBtn.style.display = "block";
      // } else {
      //   notificationBtn.style.display = "none";
      // }
    }

    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
    } else {
      if (checkNotificationPromise()) {
        Notification.requestPermission().then((permission) => {
          handlePermission(permission);
        });
      } else {
        Notification.requestPermission(function (permission) {
          handlePermission(permission);
        });
      }
    }
  }

  function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }

    return true;
  }

  function createNotification() {
    console.log("hi");
    Notification.requestPermission(function (status) {
      console.log(status);

      // let img = "/to-do-notifications/img/icon-128.png";
      let text = "Reminder set!";
      new Notification("To do list", {
        body: text,
        // icon: img,
      });
    });
  }

  return (
    <Card
      variant="raised"
      style={{ marginBottom: "20px", paddingBottom: "16px" }}
    >
      <main id="main-content" style={{ width: "50%", margin: "auto" }}>
        <h1>Set a Reminder</h1>
        <Button
          variant="action"
          text="Allow Notifications"
          onClick={handleRequestToAllowNotifications}
          style={{ marginRight: "12px" }}
        />
        <Button
          variant="action"
          text="Create a Notification"
          onClick={createNotification}
          style={{ marginRight: "12px" }}
        />
      </main>
    </Card>
  );
};

export default ReminderAlarm;
