import React, { Component } from "react";
import "./index.css";
import { Checkbox, message } from "antd";
import { masks } from "./validator";
import { Redirect } from "react-router-dom";
import { NewUser } from "../../services/user";

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
    rendirect: false,
    cadastrar: false,
    codigo: ""
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

    if (status === 200) {
      console.log(data);
      await this.clearState();
      await this.setState({
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

  Cadastro = () => (
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

  Confirmar = () => (
    <div className="div-main-cadastro">
      <div className="div-card-cadastro">
        <div className="div-icon-login">
          {this.renderRedirect()}
          <ArrowLeftOutlined
            style={{ margin: "5px 0 0 5px" }}
            onClick={this.setRedirect}
          />
        </div>
        <h1 className="h1-cadastro">Confirmar</h1>
        <input
          className="input-confirmar"
          placeholder="0000000"
          value={this.state.codigo}
          name="codigo"
          onChange={this.onChange}
        ></input>
        <p className="p-confirmar">
          Quando você clicar em "Continuar", enviaremos uma mensagem de texto
          com o código de verificação. O número de telefone confirmado pode ser
          utilizado para se cadastrar.
        </p>
        <button className="button-cadastro" onClick={this.newUser}>
          Confirmar
        </button>
      </div>
    </div>
  );

  render() {
    return (
      <div>{this.state.cadastrar ? <this.Confirmar /> : <this.Cadastro />}</div>
    );
  }
}

export default CadastroPage;
