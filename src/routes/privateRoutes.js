import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PagesRoute from "../pages";

class PrivateRoute extends Component {
  render() {
    return (
      <div className="div-main-route">
        <div className="div-main-body">
          <div>
            <Switch>
              <Route path="/logged" component={PagesRoute} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(PrivateRoute);
