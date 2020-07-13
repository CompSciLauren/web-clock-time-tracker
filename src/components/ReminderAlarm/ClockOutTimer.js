import React from "react";
import Popup from "terra-popup";
import NotificationDialog from "terra-notification-dialog";
import AlarmAlert from "./AlarmAlert";

class ClockOutTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alarmTime: "",
      open: false,
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }
  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
    this.interval = setInterval(() => this.checkAlarmClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }

  setAlarmTime(time) {
    const inputAlarmTimeModified = time;
    this.setState({
      alarmTime: inputAlarmTimeModified,
    });
  }

  checkAlarmClock() {
    if (this.state.alarmTime === "undefined" || !this.state.alarmTime) {
    } else {
      if (this.state.currentTime === this.state.alarmTime) {
        this.setState({ open: true });
      } else {
      }
    }
  }

  render() {
    let content;
    let alert;
    if (this.state.alarmTime !== "") {
      alert = <AlarmAlert />;
      if (this.state.alarmTime === this.state.currentTime) {
        content = (
          <Popup isOpen={true} onRequestClose={false}>
            <NotificationDialog
              isOpen={true}
              title="It's time to clock out"
              startMessage="Your alarm has been set."
              acceptAction={{
                text: "Okay",
                onClick: false,
              }}
              buttonOrder="acceptFirst"
              emphasizedAction="accept"
            />
          </Popup>
        );
      }
    }
    return (
      <div>
        {alert}
        {content}
      </div>
    );
  }
}
export default ClockOutTimer;
