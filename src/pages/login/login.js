import React from "react";
import Card from "terra-card";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";

function login() {
  return (
    <div>
      <Card
        variant="raised"
        style={{ marginBottom: "20px", paddingBottom: "16px" }}
      >
        <main id="main-content" style={{ width: "50%", margin: "auto" }}>
          <h1>Log in to your account</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <InputField
              label="Username"
              inputId="inputUsername"
              type="string"
              placeholder="myusername"
              // value={totalHoursNeeded}
              // onChange={(e) => setTotalHoursNeeded(e.target.value)}
            />

            <br />

            <InputField
              label="Password"
              inputId="inputPassword"
              type="password"
              placeholder="mypassword"
              // value={hoursWorked}
              // onChange={(e) => setHoursWorked(e.target.value)}
            />

            <br />

            <br />
            <Button
              variant="action"
              text="Log in"
              // onClick={handleRemindMe}
            />
            <Button
              variant="action"
              text="Register"
              // onClick={handleRemindMe}
              style={{ marginLeft: "12px" }}
            />
          </form>
        </main>
      </Card>
    </div>
  );
}

export default login;
