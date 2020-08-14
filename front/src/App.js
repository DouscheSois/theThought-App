import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footnote from "./components/Footnote";
import Entries from "./components/Entries";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";

import PrivateRoute from "./components/PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/entries" component={Entries} />
          </Switch>
          <Footnote />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
