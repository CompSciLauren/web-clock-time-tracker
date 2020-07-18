import React from "react";
import Alert from "terra-alert";
const NotificationBanner = (props) => (
  <Alert
    type={props.type}
    title={props.type.charAt(0).toUpperCase() + props.type.slice(1)}
  >
    {props.message}
  </Alert>
);
export default NotificationBanner;
