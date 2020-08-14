import React from "react";

const ProfileItem = ({
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
      <h2>{name}</h2>
      <h2>{location}</h2>
      <button>View Profile</button>
    </div>
  );
};

export default ProfileItem;
