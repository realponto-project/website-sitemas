import React, { Component } from "react";
import "./index.css";
import { Checkbox, message } from "antd";
import { masks } from "./validator";
import { Redirect } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";

class CadastroPage extends Component {
  state = {
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    senha: "",
    confirmar: "",
    celular: "",
    notificacao: false,
    rendirect: false
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
                placeholder="Cpf"
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
            <input className="input-cadastro" placeholder="E-mail"></input>
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
            <Checkbox onChange={this.onChangeNotificacao}>
              Permitir com que nosso sitema envie notificações.
            </Checkbox>
          </div>
          <button className="button-login">Cadastrar</button>
        </div>
      </div>
    );
  }
}

export default CadastroPage;
