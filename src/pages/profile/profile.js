import React from "react";
import { Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ViewTimeCodes from "../../components/ViewTimeCodes/ViewTimeCodes";
import "./profile.css";

const Profile = () => {
  const auth = useAuth();
  console.log("auth:::::", auth);

  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <main id="main-content">
        <ViewTimeCodes />
      </main>
    </div>
  );
};

export default Profile;
