import React from "react";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import Base from "terra-base";
import "./App.css";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
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
              <NavLink className="remove-decoration" to="/">
                Clock
              </NavLink>
            </li>
            {auth.isLoggedIn && (
              <li>
                <NavLink className="remove-decoration" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
            {auth.isLoggedIn && (
              <li>
                <NavLink className="remove-decoration" to="/statistics">
                  Statistics
                </NavLink>
              </li>
            )}
            <li>
              {!auth.isLoggedIn ? (
                <NavLink className="remove-decoration" to="/login">
                  Login
                </NavLink>
              ) : (
                <NavLink
                  className="remove-decoration"
                  onClick={auth.logout}
                  to="/login"
                >
                  Logout
                </NavLink>
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
