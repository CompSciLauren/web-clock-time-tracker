import React from "react";
import Base from "terra-base";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import clock from "./pages/clock/clock.js";
import profile from "./pages/profile/profile.js";
import statistics from "./pages/statistics/statistics.js";

function App() {
  return (
    <Base locale="en">
      <div className="App">
        <Router>
          <main>
            <nav>
              <ul>
                <li>
                  <a href="/">Clock</a>
                </li>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="/statistics">Statistics</a>
                </li>
              </ul>
            </nav>
            <Route path="/" exact component={clock} />
            <Route path="/profile" exact component={profile} />
            <Route path="/statistics" exact component={statistics} />
          </main>
        </Router>
      </div>
    </Base>
  );
}

export default App;
