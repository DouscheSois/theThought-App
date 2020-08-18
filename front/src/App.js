import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footnote from "./components/Footnote";
import Entries from "./components/entries/Entries";
import Profile from "./components/profile/Profile";
import ProfileById from "./components/profile/ProfileById";
import CreateProfile from "./components/profile/CreateProfile";
import EditProfileForm from "./components/profile/EditProfileForm";
import AllProfiles from "./components/profile/plural/AllProfiles";
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
            <Route exact path="/profiles" component={AllProfiles} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:id" component={ProfileById} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute
              exact
              path="/edit-profile"
              component={EditProfileForm}
            />
            <PrivateRoute exact path="/entries" component={Entries} />
          </Switch>
          <Footnote />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
