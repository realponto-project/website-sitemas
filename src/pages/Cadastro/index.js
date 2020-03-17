import React, { Component } from "react";
import "./index.css";

class CadastroPage extends Component {
  state = {
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    senha: "",
    confirmar: "",
    celular: "",
    notificacao: false
  };

  render() {
    return (
      <div className="div-main-cadastro">
        <input className="input-cadastro" placeholder="nome"></input>
        <input placeholder="sobrenome"></input>
        <input placeholder="cpf"></input>
        <input placeholder="email"></input>
        <input placeholder="senha"></input>
        <input placeholder="confirmar senha"></input>
        <input placeholder="celular"></input>
        <input placeholder="notificacao"></input>
        <button>salvar</button>
      </div>
    );
  }
}

export default CadastroPage;
