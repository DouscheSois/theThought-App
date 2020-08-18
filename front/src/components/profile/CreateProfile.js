import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ history }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  const {
    name,
    bio,
    location,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;

  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData, history));
  };

  return (
    <div className="create-profile-form">
      <h1>Create/Edit your profile</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <input
          className="form-group"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
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
      </form>
    </div>
  );
};

export default withRouter(CreateProfile);
