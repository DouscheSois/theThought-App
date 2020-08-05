import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        theThought
      </a>
      <div className="all-navbar-links">
        <a className="navbar-link" href="#">
          All Entries
        </a>
        <a className="navbar-link" href="#">
          Profile
        </a>
        <a className="navbar-link" href="#">
          Register
        </a>
        <a className="navbar-link" href="#">
          Login
        </a>
        <a className="navbar-link" href="#">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
