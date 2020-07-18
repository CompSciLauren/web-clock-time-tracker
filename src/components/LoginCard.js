import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Card from "terra-card";
import InputField from "terra-form-input/lib/InputField";
import Button from "terra-button/lib/Button";
import NotificationBanner from "../components/NotificationBanner.js";

const LoginCard = () => {
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterCard, setShowRegisterCard] = useState(false);

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const [
    shouldRedirectForSuccessfulLogin,
    setShouldRedirectForSuccessfulLogin,
  ] = useState(false);

  function handleLogin() {
    auth
      .attemptLogin(username, password)
      .then(() => {
        setShouldRedirectForSuccessfulLogin(true);
      })
      .catch(() => {
        alert("Incorrect username or password");
      });
  }

  const handleRegister = () => {
    setShowRegisterCard(!showRegisterCard);
  };

  const handleCreateMyAccount = () => {
    console.log("handleCreateMyAccount not implemented yet.");
    console.log("New Username:", newUsername);
    console.log("New Password:", newPassword);
    console.log("New Password:", newConfirmPassword);
  };

  if (shouldRedirectForSuccessfulLogin) {
    return <Redirect to="/profile" />;
  }

  return (
    <>
      {!showRegisterCard ? (
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
      ) : (
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
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />

              <br />

              <InputField
                label="Password"
                inputId="inputPassword"
                type="password"
                placeholder="mypassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <InputField
                label="Confirm Password"
                inputId="inputConfirmPassword"
                type="password"
                placeholder="mypassword"
                value={newConfirmPassword}
                onChange={(e) => setNewConfirmPassword(e.target.value)}
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
      )}
    </>
  );
};

export default LoginCard;
