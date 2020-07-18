import React from "react";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import Base from "terra-base";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import clock from "./pages/clock/clock.js";
import profile from "./pages/profile/profile.js";
import statistics from "./pages/statistics/statistics.js";
import login from "./pages/login/login.js";

const App = () => {
  return (
    <AuthProvider>
      <Base locale="en">
        <div className="App">
          <Navigation />
        </div>
      </Base>
    </AuthProvider>
  );
};

export default App;

const Navigation = () => {
  const auth = useAuth();
  console.log("auth:", auth);

  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <a className="remove-decoration" href="/">
                Clock
              </a>
            </li>
            {auth.isLoggedIn && (
              <li>
                <a className="remove-decoration" href="/profile">
                  Profile
                </a>
              </li>
            )}
            {auth.isLoggedIn && (
              <li>
                <a className="remove-decoration" href="/statistics">
                  Statistics
                </a>
              </li>
            )}
            <li>
              {!auth.isLoggedIn ? (
                <a className="remove-decoration" href="/login">
                  Login
                </a>
              ) : (
                <a
                  className="remove-decoration"
                  onClick={auth.logout}
                  href="/login"
                >
                  Logout
                </a>
              )}
            </li>
            <li>
              <a
                className="remove-decoration"
                href="https://github.com/CompSciLauren/web-clock-time-tracker/issues/new/choose"
              >
                Log an Issue
              </a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={clock} />
        <Route path="/profile" exact component={profile} />
        <Route path="/statistics" exact component={statistics} />
        <Route path="/login" exact component={login} />
      </main>
    </Router>
  );
};
