import React, { Component } from "react";
import "./index.css";
import { Menu, Dropdown } from "antd";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Logout } from "../../pages/Login/LoginRedux/action";

import { LogoutOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

class PerfilPage extends Component {
  state = {
    redirect: false,
    redirectToPerfil: false,
    page: 0
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
      return <Redirect to="/logged/perfil" />;
    }
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
        <div className="div-main-perfil">
          <div className="div-inputs-perfil">
            <h1 className="h1-perfil">Perfil</h1>
            <div className="div-line-cadastro">
              <input
                className="input-cadastro input-50"
                placeholder="Nome"
                onChange={this.onChange}
                name="nome"
                value={this.state.nome}
              ></input>
              <input
                className="input-cadastro input-50 margin-left"
                placeholder="Sobrenome"
                onChange={this.onChange}
                name="sobrenome"
                value={this.state.sobrenome}
              ></input>
            </div>
            <div className="div-line-cadastro">
              <input
                className="input-cadastro input-50"
                placeholder="CPF"
                onChange={this.onChange}
                name="cpf"
                value={this.state.cpf}
              ></input>
              <input
                className="input-cadastro input-50 margin-left"
                placeholder="Celular"
                onChange={this.onChange}
                name="celular"
                value={this.state.celular}
              ></input>
            </div>
            <div className="div-line-cadastro">
              <input
                className="input-cadastro input-60"
                placeholder="E-mail"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
              ></input>
              <input
                className="input-cadastro input-40 margin-left"
                placeholder="Senha atual"
                onChange={this.onChange}
                name="email"
                value={this.state.email}
              ></input>
            </div>
            <div className="div-line-cadastro">
              <input
                type="password"
                className="input-cadastro input-50"
                placeholder="Nova senha"
                name="senha"
                value={this.state.senha}
                onChange={this.onChange}
              ></input>
              <input
                type="password"
                className="input-cadastro input-50 margin-left"
                placeholder="Confirmar senha"
                name="confirmar"
                value={this.state.confirmar}
                onChange={this.onChange}
                onBlur={this.confirmarSenha}
              ></input>
            </div>
            <button className="button-perfil">Salvar</button>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispacthToProps)(PerfilPage);
