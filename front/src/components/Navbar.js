import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuth, isloading }, logout }) => {
  const privateLinks = (
    <Fragment>
      <Link className="navbar-link" to="/entries">
        All Entries
      </Link>
      <a className="navbar-link" href="#">
        Profile
      </a>
      <a className="navbar-link" onClick={logout} href="#!">
        Logout
      </a>
    </Fragment>
  );

  const publicLinks = (
    <Fragment>
      <a className="navbar-link" href="#">
        Register
      </a>
      <Link className="navbar-link" to="/login">
        Login
      </Link>
    </Fragment>
  );

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        theThought
      </a>
      <div className="all-navbar-links">
        {!isloading && (
          <Fragment>{isAuth ? privateLinks : publicLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  auth: state.auth,
});

export default connect(stateToProps, { logout })(Navbar);
