import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserProfile } from "../../actions/profile";
import ProfileMeItem from "./ProfileMeItem";
import EditProfile from "./EditProfile";

const Profile = () => {
  useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  return profile.isloading && profile.profile === null ? (
    <h3>loading</h3>
  ) : (
    <div className="profile-page">
      <h2>Welcome to your profile, {auth.user && auth.user.name}</h2>
      {profile.profile === null ? (
        <div className="profile-page-body">
          <p>Create Profile Now</p>
          <Link to="/create-profile">Create Profile</Link>
        </div>
      ) : (
        <Fragment>
          <EditProfile />
          <ProfileMeItem key={profile._id} profile={profile} />
        </Fragment>
      )}
    </div>
  );
};

export default Profile;
