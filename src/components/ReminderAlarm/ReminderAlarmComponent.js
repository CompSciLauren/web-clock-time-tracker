import React from "react";
import Card from "terra-card";
import Grid from "terra-grid";
import TimeInput from "terra-time-input/lib/TimeInput";
import TimeUtil from "terra-time-input/lib/TimeUtil";
import ClockOutTimer from "./ClockOutTimer";

class ReminderAlarmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }
  handleTimeChange(event, time) {
    this.setState({ time });
    this.outTime.setAlarmTime(time);
  }
  render() {
    return (
      <Card
        variant="raised"
        style={{ marginBottom: "20px", paddingBottom: "16px" }}
      >
        <main id="main-content" style={{ width: "50%", margin: "auto" }}>
          <h1>Set a Reminder</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column huge={4} />
              <TimeInput
                name="time-input-value"
                value={this.state.time}
                onChange={this.handleTimeChange}
                showSeconds
                variant={TimeUtil.FORMAT_12_HOUR}
              />
              <Grid.Column huge={1} />
              <ClockOutTimer
                ref={(outTime) => {
                  this.outTime = outTime;
                }}
              />
            </Grid.Row>
          </Grid>
        </main>
      </Card>
    );
  }
}
export default ReminderAlarmComponent;
