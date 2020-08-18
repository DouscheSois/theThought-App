import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import ViewProfile from "./ViewProfile";

const ProfileById = ({
  getProfileById,
  profile: { profile, isloading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profile === null || isloading ? (
        <small>loading</small>
      ) : (
        <Fragment>
          <Link to="/profiles">Go Back</Link>
        </Fragment>
      )}
      <div className="a">
        <ViewProfile profile={profile} />
      </div>
    </Fragment>
  );
};

ProfileById.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(ProfileById);
