import React, { useEffect, Link, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserProfile } from "../../actions/profile";
import ProfileMeItem from "./ProfileMeItem";

const Profile = ({ isloading, user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  const profile = useSelector((state) => state.profile);
  // const auth = useSelector((state) => state.auth);

  return isloading && profile === null ? (
    <h4>loading</h4>
  ) : (
    <Fragment>
      <p>
        <i className="fas fa-user"></i> Welcome {user}
      </p>
      {profile !== null ? (
        <Fragment>
          <h1>
            <div>{profile.location}</div>
          </h1>
          <button className="btn btn-danger">
            <i className="fas fa-user-minus"></i>
            Delete My Account
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
