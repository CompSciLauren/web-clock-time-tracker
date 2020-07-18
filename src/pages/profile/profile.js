import React from "react";
import ViewTimeCodes from "../../components/ViewTimeCodes/ViewTimeCodes";
import NotificationBanner from "../../components/NotificationBanner.js";
import "./profile.css";

function profile() {
  return (
    <div>
      <main id="main-content">
        <NotificationBanner
          type="error"
          message="This feature is not fully functional on the website yet."
        />
        <ViewTimeCodes />
      </main>
    </div>
  );
}

export default profile;
