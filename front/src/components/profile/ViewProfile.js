import React from "react";
import PropTypes from "prop-types";

const ViewProfile = ({
  profile: {
    bio,
    location,
    social,
    user: { name },
  },
}) => {
  return (
    <div className="view-profile">
      <h3>{name}</h3>
      <p>{bio}</p>
      <h3>{location}</h3>
    </div>
  );
};

ViewProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ViewProfile;
