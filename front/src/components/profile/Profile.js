import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserProfile } from "../../actions/profile";
import ProfileMeItem from "./ProfileMeItem";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch]);

  const profiles = useSelector((state) => state.profile.profiles);

  return (
    <div className="user-profile">
      {profiles.map((profile) => (
        <ProfileMeItem key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default Profile;
