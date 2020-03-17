import React, { Component } from "react";
import "./index.css";
import { Input } from "antd";
import { login } from "../../services/login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onSubmit } from "./LoginRedux/action";
import {
  UserOutlined,
  LockOutlined,
  ArrowLeftOutlined
} from "@ant-design/icons";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    redirect: false,
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  enterKey = async e => {
    if (e.which === 13 || e.keyCode === 13) {
      const { email, password } = this.state;

      const value = { email, password };

      const { status, data } = await login(value);

      if (status === 200) {
        await this.props.onSubmit(data);

        await this.setRedirect();
      }
      if (status === 401) {
        this.setState(data);
      }
    }
  };

  handleSubmit = async () => {
    const { email, password } = this.state;

    const value = { email, password };

    const { status, data } = await login(value);

    if (status === 200) {
      await this.props.onSubmit(data);

      await this.setRedirect();
    }
    if (status === 401) {
      this.setState(data);
    }
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  render() {
    return (
      <div className="div-main-login">
        <div className="div-card-login">
          <div className="div-icon-login">
            {this.renderRedirect()}
            <ArrowLeftOutlined
              style={{ margin: "5px 0 0 5px" }}
              onClick={this.setRedirect}
            />
          </div>
          <h2 className="h2-login">Bem-vindo</h2>
          <h1 className="h1-login">Login</h1>
          <Input
            onChange={this.onChange}
            placeholder="E-mail"
            prefix={<UserOutlined />}
            className="input-login"
            value={this.state.email}
            name="email"
            onKeyPress={this.enterKey}
          />
          <Input.Password
            onChange={this.onChange}
            placeholder="Senha"
            prefix={<LockOutlined />}
            className="input-login"
            value={this.state.password}
            name="password"
            onKeyPress={this.enterKey}
          />
          <button className="button-login" onClick={this.handleSubmit}>
            Entrar
          </button>
          <h3 className="h3-login">
            Cadastre-se <a href="/cadastro">aqui</a>
          </h3>
        </div>
      </div>
    );
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ onSubmit }, dispach);
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(LoginPage);
