import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuth, isloading }, logout }) => {
  const privateLinks = (
    <div className="dropdown-menu">
      <button className="dropdown-button">
        <i className="fas fa-ellipsis-h fa-2x"></i>
        <i className="fas fa-dot-circle fa-2x"></i>
      </button>
      <div className="dropdown-content">
        <Link className="navbar-link" to="/entries">
          <i className="fas fa-globe fa-2x"></i> Entries
        </Link>
        <Link className="navbar-link" to="/profile">
          <i className="fas fa-user-circle fa-2x"></i> Profile
        </Link>
        <a className="navbar-link" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt fa-2x"></i> Logout
        </a>
      </div>
    </div>
  );

  const publicLinks = (
    <div className="dropdown-menu">
      <button className="dropdown-button">
        <i className="fas fa-ellipsis-h fa-2x"></i>
        <i className="fas fa-dot-circle fa-2x"></i>
      </button>
      <div className="dropdown-content">
        <Link className="navbar-link" to="/register">
          <i className="fas fa-plus fa-2x"></i> Register
        </Link>
        <Link className="navbar-link" to="/login">
          <i className="fas fa-sign-in-alt fa-2x"></i> Login
        </Link>
      </div>
    </div>
  );

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/entries">
        <i className="fas fa-home"></i> theThought
      </Link>
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
