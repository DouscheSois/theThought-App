import React, { useEffect, Link, Fragment } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUserProfile } from "../../actions/profile";
import ProfileMeItem from "./ProfileMeItem";

const Profile = ({ isloading, profile }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  useSelector((state) => state.auth);
  useSelector((state) => state.profile);

  return isloading && profile === null ? (
    <h4>loading</h4>
  ) : (
    <Fragment>
      <p>
        <i className="fas fa-user"></i> Welcome
      </p>
      {profile !== null ? (
        <Fragment>
          <h1>This is your profile page</h1>
          <button className="btn btn-danger">
            <i className="fas fa-user-minus"></i> Delete My Account
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info.</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
