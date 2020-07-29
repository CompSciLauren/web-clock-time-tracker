import React, { useState } from 'react';
import Base from "terra-base";
import "./App-dark-theme.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import clock from "./pages/clock/clock.js";
import profile from "./pages/profile/profile.js";
import statistics from "./pages/statistics/statistics.js";
import ChangeThemeComponent from "./components/ChangeThemeComponent.js";

//dynamically import theme from themeConfig.js
import getConfig from './themeConfig.js';
var styles = require('./' + getConfig(1) + '.css');


//change app theme
const handleChangeTheme = () => {
  console.log('Callback worked.');


};

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
                <li>
                  <a className="remove-decoration" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="remove-decoration" href="/statistics">
                    Statistics
                  </a>
                </li>
                <li>
                  <a
                    className="remove-decoration"
                    href="https://github.com/CompSciLauren/web-clock-time-tracker/issues/new/choose"
                  >
                    Log an Issue
                  </a>
                </li>
                  <ChangeThemeComponent 
                    handleChangeTheme={handleChangeTheme}
                  />
                <li>
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
