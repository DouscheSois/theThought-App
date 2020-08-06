import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { login } from "../actions/auth";

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    login(email, password);
  };

  //Redirect if logged in

  if (isAuth) {
    return <Redirect to="/entries" />;
  }

  return (
    <Fragment>
      <h1>Login</h1>
      <h4>Login to your account</h4>
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="login-form-submit" value="Login" />
      </form>
      <p>
        Need an Account? <a href="#">Register</a>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const stateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(stateToProps, { login })(Login);
