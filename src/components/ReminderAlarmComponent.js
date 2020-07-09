import React from "react";
import PropTypes from "prop-types";
import Card from "terra-card";
import Grid from "terra-grid";
import TimeInput from "terra-time-input/lib/TimeInput";
import TimeUtil from "terra-time-input/lib/TimeUtil";

class ReminderAlarmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: "" };
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }
  handleTimeChange(event, time) {
    this.setState({ time });
  }
  render() {
    return (
      <div className="reminder-alarm-container">
        <h2>Web Clock Time Tracker</h2>
        <Card variant="default"> </Card>
        <h3>Set a Reminder</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column huge={5} />
            <TimeInput
              name="time-input-value"
              value={this.state.time}
              onChange={this.handleTimeChange}
              showSeconds
              variant={TimeUtil.FORMAT_12_HOUR}
            />
            <Grid.Column huge={6} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ReminderAlarmComponent;
