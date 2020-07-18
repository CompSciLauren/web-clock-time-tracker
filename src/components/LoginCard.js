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

  function RevealRegisterCard(props) {
    if (!props.isVisible) {
      return null;
    }

    return (
      <Card>
        <h1>Register a new account</h1>
      </Card>
    );
  }

  return (
    <div>
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
          <RevealRegisterCard isVisible={showRegisterCard} />
        </main>
      </Card>
    </div>
  );
};

export default LoginCard;
