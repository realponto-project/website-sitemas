import React, { Component } from "react";
import "./index.css";
import { Checkbox, message } from "antd";
import { masks } from "../../services/utils/validators";
import { Redirect } from "react-router-dom";
import { NewUser, Check } from "../../services/user";

import { ArrowLeftOutlined } from "@ant-design/icons";

class CadastroPage extends Component {
  state = {
    id: null,
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    senha: "",
    confirmar: "",
    celular: "",
    notificacao: false,
    rendirect: false,
    rendirectToConfirmar: false
  };

  clearState = () => {
    this.setState({
      nome: "",
      sobrenome: "",
      cpf: "",
      email: "",
      senha: "",
      confirmar: "",
      celular: "",
      notificacao: false,
      rendirect: false
    });
  };

  newUser = async () => {
    const {
      nome: name,
      senha: password,
      celular,
      cpf,
      notificacao: permissionToNotification,
      email
    } = this.state;

    const value = {
      name,
      password,
      celular,
      cpf,
      permissionToNotification,
      email
    };

    const { status, data } = await NewUser(value);

    console.log(status, data);
    if (status === 200) {
      await this.clearState();
      await this.setState({
        rendirectToConfirmar: true,
        id: data.id,
        cadastrar: true
      });
    }
  };

  onChangeNotificacao = () => {
    this.setState({
      notificacao: !this.state.notificacao
    });
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

  renderRedirectToConfirmar = () => {
    if (this.state.renderRedirectToConfirmar) {
      return <Redirect to="/confirmar" />;
    }
  };

  onChange = e => {
    const { name, value } = masks(e.target.name, e.target.value);
    this.setState({
      [name]: value
    });
  };

  confirmarSenha = () => {
    if (this.state.senha !== this.state.confirmar) {
      message.error("Senhas não coincidem");
    }
  };

  render() {
    return (
      <div className="div-main-cadastro">
        <div className="div-card-cadastro">
          <div className="div-icon-login">
            {this.renderRedirect()}
            {this.renderRedirectToConfirmar()}
            <ArrowLeftOutlined
              style={{ margin: "5px 0 0 5px" }}
              onClick={this.setRedirect}
            />
          </div>
          <h1 className="h1-cadastro">Cadastro</h1>
          <div className="div-inputs-cadastro">
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
            <input
              className="input-cadastro"
              placeholder="E-mail"
              onChange={this.onChange}
              name="email"
              value={this.state.email}
            ></input>
            <div className="div-line-cadastro">
              <input
                type="password"
                className="input-cadastro input-50"
                placeholder="Senha"
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
            <Checkbox
              onChange={this.onChangeNotificacao}
              defaultChecked={this.state.notificacao}
            >
              Permitir com que nosso sitema envie notificações.
            </Checkbox>
          </div>
          <button className="button-cadastro" onClick={this.newUser}>
            Cadastrar
          </button>
        </div>
      </div>
    );
  }
}

export default CadastroPage;
