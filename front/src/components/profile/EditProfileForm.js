import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile, getCurrentUserProfile } from "../../actions/profile";

const EditProfileForm = ({
  profile: { profile, isloading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    bio: "",
    location: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  const { bio, location, twitter, facebook, linkedin, instagram } = formData;

  useEffect(() => {
    getCurrentUserProfile();

    setFormData({
      location: isloading || !profile.location ? "" : profile.location,
      bio: isloading || !profile.bio ? "" : profile.bio,
      twitter: isloading || !profile.social ? "" : profile.social.twitter,
      facebook: isloading || !profile.social ? "" : profile.social.facebook,
      linkedin: isloading || !profile.social ? "" : profile.social.linkedin,
      instagram: isloading || !profile.social ? "" : profile.social.instagram,
    });
  }, [isloading]);

  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className="create-profile-form">
      <h1>Create/Edit your profile</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <textarea
          className="new-form-submit-textbox"
          type="text"
          placeholder="Share bio here"
          name="bio"
          value={bio}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          className="form-group"
          type="text"
          placeholder="location"
          name="location"
          value={location}
          onChange={(e) => onChange(e)}
          required
        />
        <div className="form-group">
          <input
            className="form-group-social"
            type="text"
            placeholder="Twitter url here"
            name="twitter"
            value={twitter}
            onChange={(e) => onChange(e)}
          />
          <input
            className="form-group-social"
            type="text"
            placeholder="Facebook url here"
            name="facebook"
            value={facebook}
            onChange={(e) => onChange(e)}
          />
          <input
            className="form-group-social"
            type="text"
            placeholder="Linkedin url here"
            name="linkedin"
            value={linkedin}
            onChange={(e) => onChange(e)}
          />
          <input
            className="form-group-social"
            type="text"
            placeholder="Instagram url here"
            name="instagram"
            value={instagram}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="form-group" />
        <Link className="edit-profile-form-button" to="/profile">
          Go Back
        </Link>
      </form>
    </div>
  );
};

EditProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentUserProfile,
})(withRouter(EditProfileForm));
