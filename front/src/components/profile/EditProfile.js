import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="edit-button">
      <Link to="edit-profile">Edit Profile</Link>
    </div>
  );
};

export default EditProfile;
