import React, { Fragment } from "react";

const Register = () => {
  return (
    <Fragment>
      <h1>Register</h1>
      <h4>Create an Account</h4>
      <form className="register-form">
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input
          type="submit"
          className="register-form-submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account? <a href="#">Sign In</a>
      </p>
    </Fragment>
  );
};

export default Register;
