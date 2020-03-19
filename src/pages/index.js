import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { Logout, onSubmit } from "./Login/LoginRedux/action";
import PerfilPage from "./Perfil";

class PagesRoutes extends Component {
  state = {
    auth: true
  };

  componentDidMount = async () => {
    await promisify(jwt.verify)(this.props.login.token, "RP@mod")
      .then(resp => {
        this.props.onSubmit({
          user: {
            ...this.props.login.user,
            troll: !this.props.login.user.troll
          }
        });
      })
      .catch(error => {
        console.log(error);
        this.props.Logout();
      });
  };

  render() {
    if (this.props.login.token) {
      return (
        <Switch>
          <Route exact path="/logged/perfil" component={PerfilPage} />
        </Switch>
      );
    } else {
      return <Redirect to="/home" />;
    }
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ Logout, onSubmit }, dispach);
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps, mapDispacthToProps)(PagesRoutes);
