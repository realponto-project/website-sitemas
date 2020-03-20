import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUserAction } from "../Redux/action";

import { masks } from "../../../services/utils/validators";
import { UpdateUser } from "../../../services/user";
import { message } from "antd";

class PerfilPage extends Component {
  state = {
    nome: this.props.login.user.name,
    sobrenome: "",
    cpf: masks("cpf", this.props.login.user.cpf).value,
    celular: this.props.login.user.celular,
    email: this.props.login.user.email,
    senha: ""
  };

  onChange = async e => {
    const { name, value } = masks(e.target.name, e.target.value);

    await this.setState({ [name]: value });
  };

  updateUser = async () => {
    const { nome: name, cpf } = this.state;
    const { id } = this.props.login.user;

    const { status, data } = await UpdateUser({ id, name, cpf });

    console.log(data);

    if (status === 200) {
      message.success("Atualisado com sucesso");
      this.props.updateUserAction({ user: data });
    }
  };

  render() {
    return (
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
              readOnly
              className="input-cadastro input-50 margin-left"
              placeholder="Celular"
              onChange={this.onChange}
              name="celular"
              value={this.state.celular}
            ></input>
          </div>
          <div className="div-line-cadastro">
            <input
              readOnly
              className="input-cadastro input-60"
              placeholder="E-mail"
              onChange={this.onChange}
              name="email"
              value={this.state.email}
            ></input>
          </div>
          <div className="div-line-cadastro sb">
            <Link to="perfil/updatePassword">Trocar senha</Link>
            <button className="button-perfil" onClick={this.updateUser}>
              Atualizar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispacthToProps(dispach) {
  return bindActionCreators({ updateUserAction }, dispach);
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps, mapDispacthToProps)(PerfilPage);
