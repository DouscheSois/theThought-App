import React from "react";
import { useSelector } from "react-redux";

const ProfileMeItem = ({ bio, location }) => {
  const profile = useSelector((state) => state.profile);
  return (
    <div className="profile-item">
      <i className="fas fa-portrait fa-2x"></i>
      <div>
        <h2>{bio}</h2>
        <h2>{location}</h2>
      </div>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfileMeItem;
