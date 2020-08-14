import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProfiles } from "../actions/profile";
import ProfileItem from "./ProfileItem";
import AllProfilesHeading from "./AllProfilesHeading";

const AllProfiles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  const profiles = useSelector((state) => state.profile.profiles);

  return (
    <Fragment>
      <AllProfilesHeading />
      <div className="all-profiles">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        ) : (
          <h4>
            <i className="fas fa-spinner fa-spin"></i> Loading <br />
            <small>If it loads for too long just refresh the page</small>
          </h4>
        )}
      </div>
    </Fragment>
  );
};

export default AllProfiles;
