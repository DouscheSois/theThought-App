import React, { Fragment } from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footnote from "./components/Footnote";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Footnote />
    </Fragment>
  );
};

export default App;
