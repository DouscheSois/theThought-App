import React from "react";

const ProfileMeItem = ({
  profile: {
    user: { name, _id },
    location,
    bio,
    social,
  },
}) => {
  return (
    <div className="profile-item">
      <i className="fas fa-portrait fa-2x"></i>
      <h2>
        "{name}" is now <span className="user-online">Online</span>
      </h2>
      <h2>{location}</h2>
      <h2>{bio}</h2>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfileMeItem;
