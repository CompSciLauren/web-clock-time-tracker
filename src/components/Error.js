import React from "react";
import Alert from "terra-alert";
const Error = (props) => (
  <Alert type="error" title="Error">
    {props.message}
  </Alert>
);
export default Error;
