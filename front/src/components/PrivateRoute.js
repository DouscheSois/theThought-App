import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuth, isloading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuth && !isloading ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  auth: state.auth,
});

export default connect(stateToProps)(PrivateRoute);
