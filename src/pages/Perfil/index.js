import React, { Component } from "react";
import "./index.css";
import { Menu, Dropdown, message } from "antd";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Logout } from "../../pages/Login/LoginRedux/action";
import { LogoutOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

import PerfilPage from "./PerfilContainer";
import UpadtePassword from "./UpdatePassword";

class PerfilRoute extends Component {
  state = {
    redirect: false,
    redirectToPerfil: false,
    page: 0,
    nome: this.props.login.user.name,
    sobrenome: "",
    cpf: this.props.login.user.cpf,
    celular: this.props.login.user.celular,
    email: this.props.login.user.email,
    senha: "",
    novaSenha: "",
    confirmarSenha: ""
  };

  confirmarSenha = () => {
    if (this.state.novaSenha !== this.state.confirmarSenha) {
      message.error("As senhas não coincidem");
    } else {
      message.success("Tudo certo");
    }
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };
  setRedirectToPerfil = () => {
    this.setState({
      redirectToPerfil: true
    });
  };

  renderRedirectToPerfil = () => {
    if (this.state.redirectToPerfil) {
      return <Redirect to="/perfil" />;
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  MenuDrop = () => (
    <Menu className="drop-home">
      <Menu.Item
        onClick={this.setRedirectToPerfil}
        className="drop-submenu-home"
      >
        <UserOutlined />
        Perfil
      </Menu.Item>
      <Menu.Item onClick={this.props.Logout} className="drop-submenu-home">
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <div className="main-home">
        <div className="div-menu-home">
          {this.renderRedirect}
          {this.renderRedirectToPerfil}
          <div className="div-logo-home">
            <a
              style={{
                color: "white",
                fontFamily: "Bebas",
                margin: 0,
                fontSize: "28px"
              }}
              href={"/home"}
            >
              Nome
            </a>
          </div>
          <div className="div-submenu-home">
            <a href="/home" className="a-home">
              Estoque
            </a>
            {this.props.login.user.id !== "" ? (
              <div className="div-logged-home">
                <p className="p-logged-home">{this.props.login.user.name}</p>
                <div className="div-avatar-home" />
                <Dropdown overlay={this.MenuDrop} trigger={["click"]}>
                  <DownOutlined style={{ cursor: "pointer" }} />
                </Dropdown>
              </div>
            ) : (
              <button className="button-login-home" onClick={this.setRedirect}>
                Login
              </button>
            )}
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/logged/perfil/updatePassword"
            component={UpadtePassword}
          />
          <Route exact path="/logged/perfil" component={PerfilPage} />
        </Switch>
      </div>
    );
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ Logout }, dispach);
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(PerfilRoute);
