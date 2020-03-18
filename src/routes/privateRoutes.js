import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PagesRoutes from "../pages";

class PrivateRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/logged" component={PagesRoutes} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(PrivateRoutes);
