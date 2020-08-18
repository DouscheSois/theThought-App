import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { name, _id },
    location,
  },
}) => {
  return (
    <div className="profile-item">
      <i className="fas fa-portrait fa-2x"></i>
      <h2>{name}</h2>
      <h2>{location}</h2>
      <Link to={`/profile/${_id}`}>View Profile</Link>
    </div>
  );
};

export default ProfileItem;
