import React, { useState } from "react";
import Card from "terra-card";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import NotificationBanner from "../components/NotificationBanner.js";

const LoginCard = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterCard, setShowRegisterCard] = useState(false);

  function handleLogin() {
    console.log("Username:", username);
    console.log("Password:", password);
  }

  const handleRegister = () => {
    setShowRegisterCard(!showRegisterCard);
  };

  const handleCreateMyAccount = () => {
    console.log("handleCreateMyAccount not implemented yet.");
  };

  function RevealLoginCard(props) {
    if (!props.isVisible) {
      return null;
    }

    return (
      <Card
        variant="raised"
        style={{ marginBottom: "20px", paddingBottom: "16px" }}
      >
        <NotificationBanner
          type="error"
          message="This feature is not fully functional on the website yet."
        />
        <main id="main-content" style={{ width: "50%", margin: "auto" }}>
          <h1>Log in to your account</h1>
          <form>
            <InputField
              label="Username"
              inputId="inputUsername"
              type="string"
              placeholder="myusername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <br />

            <InputField
              label="Password"
              inputId="inputPassword"
              type="password"
              placeholder="mypassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <br />
            <Button variant="action" text="Log in" onClick={handleLogin} />
            <Button
              variant="action"
              text="Register"
              onClick={handleRegister}
              style={{ marginLeft: "12px" }}
            />
          </form>
        </main>
      </Card>
    );
  }

  function RevealRegisterCard(props) {
    if (!props.isVisible) {
      return null;
    }

    return (
      <Card
        variant="raised"
        style={{ marginBottom: "20px", paddingBottom: "16px" }}
      >
        <NotificationBanner
          type="error"
          message="This feature is not fully functional on the website yet."
        />
        <main id="main-content" style={{ width: "50%", margin: "auto" }}>
          <h1>Register a new account</h1>
          <form>
            <InputField
              label="Username"
              inputId="inputNewUsername"
              type="string"
              placeholder="myusername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <br />

            <InputField
              label="Password"
              inputId="inputPassword"
              type="password"
              placeholder="mypassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputField
              label="Confirm Password"
              inputId="inputConfirmPassword"
              type="password"
              placeholder="mypassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <br />
            <Button
              variant="action"
              text="Create My Account"
              onClick={handleCreateMyAccount}
            />
            <Button
              variant="action"
              text="Back"
              onClick={handleRegister}
              style={{ marginLeft: "12px" }}
            />
          </form>
        </main>
      </Card>
    );
  }

  return (
    <div>
      <RevealLoginCard isVisible={!showRegisterCard} />
      <RevealRegisterCard isVisible={showRegisterCard} />
    </div>
  );
};

export default LoginCard;
