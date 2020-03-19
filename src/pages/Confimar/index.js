import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { masks } from "../../services/utils/validators";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Check } from "../../services/user";
import { message, Button } from "antd";

class ConfirmarPage extends Component {
  state = {
    codigo: "",
    codigoUm: "",
    codigoDois: "",
    codigoTres: "",
    codigoQuatro: "",
    codigoCinco: "",
    codigoSeis: "",
    codigoSete: "",
    rendirect: false,
    loading: false
  };

  clearState = () => {
    this.setState({
      codigo: "",
      codigoUm: "",
      codigoDois: "",
      codigoTres: "",
      codigoQuatro: "",
      codigoCinco: "",
      codigoSeis: "",
      codigoSete: "",
      rendirect: false
    });
  };

  onChange = e => {
    const { name, value } = masks(e.target.name, e.target.value);
    this.setState({
      [name]: value
    });
  };

  setRedirect = () => {
    this.setState({
      redirect: "/cadastro"
    });
  };
  renderRedirect = () => {
    if (this.state.redirect || !this.props.newUserId) {
      return <Redirect to={this.state.rendirect} />;
    }
  };

  check = async () => {
    const key = `${this.state.codigoUm}${this.state.codigoDois}${this.state.codigoTres}${this.state.codigoQuatro}${this.state.codigoCinco}${this.state.codigoSeis}${this.state.codigoSete}`;

    await this.setState({
      codigo: key,
      loading: true
    });

    const { status, data } = await Check({ key, id: this.props.newUserId.id });

    await this.setState({
      loading: false
    });

    if (status === 200) {
      message.success("cadastro confirmado");
      this.setState({ redirect: "/login" });
    } else {
      message.error("chave de acesso incorreta");
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
          <h1 className="h1-cadastro">Confirmar</h1>
          <div className="div-inputs-confirmar">
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoUm}
              name="codigoUm"
              id="codigoUm"
              onChange={this.onChange}
              onFocus={
                this.state.codigoUm.length === 1
                  ? document.getElementById("codigoDois").focus()
                  : null
              }
            ></input>
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoDois}
              name="codigoDois"
              id="codigoDois"
              onChange={this.onChange}
              onFocus={
                this.state.codigoDois.length === 1
                  ? document.getElementById("codigoTres").focus()
                  : null
              }
            ></input>
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoTres}
              name="codigoTres"
              id="codigoTres"
              onChange={this.onChange}
              onFocus={
                this.state.codigoTres.length === 1
                  ? document.getElementById("codigoQuatro").focus()
                  : null
              }
            ></input>
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoQuatro}
              name="codigoQuatro"
              id="codigoQuatro"
              onChange={this.onChange}
              onFocus={
                this.state.codigoQuatro.length === 1
                  ? document.getElementById("codigoCinco").focus()
                  : null
              }
            ></input>
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoCinco}
              name="codigoCinco"
              id="codigoCinco"
              onChange={this.onChange}
              onFocus={
                this.state.codigoCinco.length === 1
                  ? document.getElementById("codigoSeis").focus()
                  : null
              }
            ></input>
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoSeis}
              name="codigoSeis"
              id="codigoSeis"
              onChange={this.onChange}
              onFocus={
                this.state.codigoSeis.length === 1
                  ? document.getElementById("codigoSete").focus()
                  : null
              }
            ></input>
            <input
              className="input-confirmar"
              placeholder="0"
              value={this.state.codigoSete}
              name="codigoSete"
              id="codigoSete"
              onChange={this.onChange}
            ></input>
          </div>
          <p className="p-confirmar">
            Quando você clicar em "Continuar", enviaremos uma mensagem de texto
            com o código de verificação. O número de telefone confirmado pode
            ser utilizado para se cadastrar.
          </p>
          {/* <button className="button-cadastro" onClick={this.check}>
            Confirmar
          </button> */}
          <Button
            className="button-cadastro"
            onClick={this.check}
            loading={this.state.loading}
          >
            Confirmar
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newUserId: state.newUserId
  };
}

export default connect(mapStateToProps)(ConfirmarPage);
