import React from "react";
import Base from "terra-base";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import clock from "./pages/clock/clock.js";
import profile from "./pages/profile/profile.js";
import statistics from "./pages/statistics/statistics.js";
import login from "./pages/login/login.js";

function App() {
  return (
    <Base locale="en">
      <div className="App">
        <Router>
          <main>
            <nav>
              <ul>
                <li>
                  <a className="remove-decoration" href="/">
                    Clock
                  </a>
                </li>
                {3 > 2 && (
                  <li>
                    <a className="remove-decoration" href="/profile">
                      Profile
                    </a>
                  </li>
                )}
                {3 > 2 && (
                  <li>
                    <a className="remove-decoration" href="/statistics">
                      Statistics
                    </a>
                  </li>
                )}
                <li>
                  {3 > 2 ? (
                    <a className="remove-decoration" href="/login">
                      Login
                    </a>
                  ) : (
                    <a className="remove-decoration" href="/login">
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
      </div>
    </Base>
  );
}

export default App;
