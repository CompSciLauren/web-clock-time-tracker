import React from "react";
import ViewTimeCodes from "../../components/ViewTimeCodes/ViewTimeCodes";
import Error from "../../components/Error.js";
import "./profile.css";

function profile() {
  return (
    <div>
      <main id="main-content">
        <Error message="This feature is not fully functional on the website yet." />
        <ViewTimeCodes />
      </main>
    </div>
  );
}

export default profile;
