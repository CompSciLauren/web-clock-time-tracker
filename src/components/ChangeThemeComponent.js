import React, { useState } from "react";
import "../styles/change-theme-button.css";



  /**
   * Callback for when the user clicks the toggle theme button.
  */
 //props.handleChangeTheme

const ChangeThemeComponent = (props) => {
  const [nextTheme, setNextTheme] = useState("Dark Mode");

  const changeTheme = () => {
    // switch theme
    if (nextTheme === "Dark Mode") {
      setNextTheme("Light Mode")
    } else {
      setNextTheme("Dark Mode")
    }

    //invoke callback function
    props.handleChangeTheme();
  };

  return (
    <a
      className="change-theme"
      href="#top"
      onClick={changeTheme}
    >
      {nextTheme}
    </a>
  );
};

export default ChangeThemeComponent;
