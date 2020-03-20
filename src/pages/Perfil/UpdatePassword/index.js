import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { message } from "antd";

import { UpdatePassword } from "../../../services/user";

class UpdatePasswordPage extends Component {
  state = {
    email: this.props.login.user.email,
    senha: "",
    novaSenha: "",
    confirmarSenha: ""
  };

  clearState = () => {
    this.setState({
      email: this.props.login.user.email,
      senha: "",
      novaSenha: "",
      confirmarSenha: ""
    });
  };

  onChange = async e => {
    const { name, value } = e.target;

    await this.setState({ [name]: value });
  };

  confirmarSenha = () => {
    const { novaSenha, confirmarSenha } = this.state;

    if (novaSenha !== confirmarSenha) {
      this.setState({ confirmarSenha: "" });
      message.error("Senha incompatível");
    }
  };

  updatePassword = async () => {
    const { id } = this.props.login.user;
    const { confirmarSenha: newPassword, senha: password } = this.state;

    const { status, data } = await UpdatePassword({
      id,
      password,
      newPassword
    });

    if (status === 200) {
      message.success("senha aualizada");
      this.clearState();
    } else {
      message.error("Erro ao atualizar senha");
    }
  };

  render() {
    return (
      <div className="div-main-perfil">
        <div className="div-inputs-perfil">
          <h1 className="h1-perfil">Alterar senha</h1>
          <div className="div-line-cadastro">
            <input
              readOnly
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
              name="senha"
              value={this.state.senha}
            ></input>
          </div>
          <div className="div-line-cadastro">
            <input
              type="password"
              className="input-cadastro input-50"
              placeholder="Nova senha"
              name="novaSenha"
              value={this.state.novaSenha}
              onChange={this.onChange}
            ></input>
            <input
              type="password"
              className="input-cadastro input-50 margin-left"
              placeholder="Confirmar senha"
              name="confirmarSenha"
              value={this.state.confirmarSenha}
              onChange={this.onChange}
              onBlur={this.confirmarSenha}
            ></input>
          </div>
          <button className="button-perfil" onClick={this.updatePassword}>
            Salvar
          </button>
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

export default connect(mapStateToProps)(UpdatePasswordPage);
