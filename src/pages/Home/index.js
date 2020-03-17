import React, { Component } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Menu, Dropdown } from "antd";
import { Logout } from "../../pages/Login/LoginRedux/action";

import {
  RightOutlined,
  LeftOutlined,
  FacebookFilled,
  InstagramFilled,
  ChromeFilled,
  PhoneFilled,
  MailFilled,
  LogoutOutlined,
  DownOutlined,
  RocketFilled
} from "@ant-design/icons";

class HomePage extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState({
        page: (this.state.page + 1) % 5
      });
    }, 5000);
  }

  state = {
    redirect: false,
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

  nextPage = () => {
    this.setState({
      page: (this.state.page + 1) % 5
    });
  };

  prevPage = () => {
    this.setState({
      page: (this.state.page - 1) % 5
    });
  };

  MenuDrop = () => (
    <Menu className="drop-home">
      <Menu.Item onClick={this.props.Logout} className="drop-submenu-home">
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );

  Carousel = () => {
    if (this.state.page === 0) {
      return (
        <div className="carousel-home">
          <div className="div-mainCarousel-home">
            <div className="div-nextAndPerv-home" onClick={this.prevPage}>
              <LeftOutlined />
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardReact-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#61DBFC",
                  fontFamily: "Bebas"
                }}
              >
                React
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRedux-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8159C3",
                  fontFamily: "Bebas"
                }}
              >
                Redux
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRamda-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#884399",
                  fontFamily: "Bebas"
                }}
              >
                Ramda
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardNode-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8AC649",
                  fontFamily: "Bebas"
                }}
              >
                Node
              </h2>
            </div>
            <div className="div-nextAndPerv-home" onClick={this.nextPage}>
              <RightOutlined />
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 1 || this.state.page === -4) {
      return (
        <div className="carousel-home">
          <div className="div-mainCarousel-home">
            <div className="div-nextAndPerv-home" onClick={this.prevPage}>
              <LeftOutlined />
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRedux-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8159C3",
                  fontFamily: "Bebas"
                }}
              >
                Redux
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRamda-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#884399",
                  fontFamily: "Bebas"
                }}
              >
                Ramda
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardNode-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8AC649",
                  fontFamily: "Bebas"
                }}
              >
                Node
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardGit-home"></div>
              <h2
                style={{
                  marginTop: "20px",
                  color: "#000000",
                  fontFamily: "Bebas"
                }}
              >
                GitHub
              </h2>
            </div>
            <div className="div-nextAndPerv-home" onClick={this.nextPage}>
              <RightOutlined />
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 2 || this.state.page === -3) {
      return (
        <div className="carousel-home">
          <div className="div-mainCarousel-home">
            <div className="div-nextAndPerv-home" onClick={this.prevPage}>
              <LeftOutlined />
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRamda-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#884399",
                  fontFamily: "Bebas"
                }}
              >
                Ramda
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardNode-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8AC649",
                  fontFamily: "Bebas"
                }}
              >
                Node
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardGit-home"></div>
              <h2
                style={{
                  marginTop: "20px",
                  color: "#000000",
                  fontFamily: "Bebas"
                }}
              >
                GitHub
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardReact-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#61DBFC",
                  fontFamily: "Bebas"
                }}
              >
                React
              </h2>
            </div>
            <div className="div-nextAndPerv-home" onClick={this.nextPage}>
              <RightOutlined />
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 3 || this.state.page === -2) {
      return (
        <div className="carousel-home">
          <div className="div-mainCarousel-home">
            <div className="div-nextAndPerv-home" onClick={this.prevPage}>
              <LeftOutlined />
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardNode-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8AC649",
                  fontFamily: "Bebas"
                }}
              >
                Node
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardGit-home"></div>
              <h2
                style={{
                  marginTop: "20px",
                  color: "#000000",
                  fontFamily: "Bebas"
                }}
              >
                GitHub
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardReact-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#61DBFC",
                  fontFamily: "Bebas"
                }}
              >
                React
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRedux-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8159C3",
                  fontFamily: "Bebas"
                }}
              >
                Redux
              </h2>
            </div>
            <div className="div-nextAndPerv-home" onClick={this.nextPage}>
              <RightOutlined />
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 4 || this.state.page === -1) {
      return (
        <div className="carousel-home">
          <div className="div-mainCarousel-home">
            <div className="div-nextAndPerv-home" onClick={this.prevPage}>
              <LeftOutlined />
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardGit-home"></div>
              <h2
                style={{
                  marginTop: "20px",
                  color: "#000000",
                  fontFamily: "Bebas"
                }}
              >
                GitHub
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardReact-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#61DBFC",
                  fontFamily: "Bebas"
                }}
              >
                React
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRedux-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#8159C3",
                  fontFamily: "Bebas"
                }}
              >
                Redux
              </h2>
            </div>
            <div className="div-cardsCarousel-home">
              <div className="div-cardRamda-home" />
              <h2
                style={{
                  marginTop: "20px",
                  color: "#884399",
                  fontFamily: "Bebas"
                }}
              >
                Ramda
              </h2>
            </div>
            <div className="div-nextAndPerv-home" onClick={this.nextPage}>
              <RightOutlined />
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="main-home">
        <div className="div-menu-home">
          {this.renderRedirect()}
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
        <div className="div-image-home">
          <div className="div-minor-image-home">
            <h1 className="h1-image-home">Sobre nos</h1>
            <p className="p-image-home">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="div-bg-home">
          <h1 style={{ color: "white", fontFamily: "Bebas" }}>
            Tecnologias usadas
          </h1>
          <this.Carousel />
        </div>
        <div data-aos="fade-up" className="div-nossosEspe-home">
          <h2 className="h2-nossosEspe-home">Nossos especialistas</h2>
          <div
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="750"
            className="div-cardsNossosEspe-home"
          >
            <div className="card-nossosEspe-home">
              <div className="div-fotoNossosEspe-home"></div>
              <h2 className="h2-cardNossosEspe-home">Carlos Beleza</h2>
              <h3 className="h3-cardNossosEspe-home">Desenvolvedor</h3>
            </div>
            <div data-aos="zoom-in" className="card-nossosEspe-home">
              <div className="div-fotoNossosEspec-home"></div>
              <h2 className="h2-cardNossosEspe-home">Carlos e sua neguinha</h2>
              <h3 className="h3-cardNossosEspe-home">Desenvolvedor</h3>
            </div>
            <div data-aos="zoom-in" className="card-nossosEspe-home">
              <div className="div-fotoNossosEspeci-home"></div>
              <h2 className="h2-cardNossosEspe-home">Carlos noel</h2>
              <h3 className="h3-cardNossosEspe-home">Cordenador</h3>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="750"
          className="div-noticia-home"
        >
          <div className="div-print-home"></div>
          <h1 style={{ color: "white", fontFamily: "Bebas" }}>
            Estoque mais zika
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="750"
          className="div-comentarios-home"
        >
          <h1 style={{ color: "#1e90ff", fontFamily: "Bebas" }}>Comentarios</h1>
          <div className="card-comentarios-home">
            <p className="p-comentarios-home">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="div-nomeCliente-comentarios-home">
              - Carlos Matias
            </div>
            <div className="div-buttonsAvancarEretornar-home">
              <button className="button-avancarEretornar-home">
                <LeftOutlined style={{ fontSize: "12px" }} />
              </button>
              <button className="button-avancarEretornar-home">
                <RightOutlined style={{ fontSize: "12px" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="div-rodape-home">
          <div className="div-columns-rodape-home">
            <div className="div-coluna-rodape-home">
              <h2
                style={{
                  color: "rgb(59, 59, 59)",
                  fontFamily: "Bebas",
                  marginTop: "10px",
                  cursor: "default"
                }}
              >
                Sistemas
              </h2>
              <div className="div-a-rodape-home">
                <a className="a-rodape-home cursor-pointer" href="/home">
                  <RocketFilled style={{ marginRight: "7px" }} />
                  Estoque
                </a>
              </div>
            </div>
            <div className="div-coluna-rodape-home">
              <h2
                style={{
                  color: "rgb(59, 59, 59)",
                  fontFamily: "Bebas",
                  marginTop: "10px",
                  cursor: "default"
                }}
              >
                TESTE
              </h2>
            </div>
            <div className="div-coluna-rodape-home">
              <h2
                style={{
                  color: "rgb(59, 59, 59)",
                  fontFamily: "Bebas",
                  marginTop: "10px",
                  cursor: "default"
                }}
              >
                TESTE
              </h2>
            </div>
            <div className="div-coluna-rodape-home">
              <h2
                style={{
                  color: "rgb(59, 59, 59)",
                  fontFamily: "Bebas",
                  marginTop: "10px",
                  cursor: "default"
                }}
              >
                Contato
              </h2>
              <p className="a-rodape-home">
                <MailFilled style={{ marginRight: "7px" }} />
                comercial@realponto.com.br
              </p>
              <p className="a-rodape-home">
                <PhoneFilled style={{ marginRight: "7px" }} /> (11) 4332-4040
              </p>
            </div>
            <div className="div-coluna-rodape-home">
              <h2
                style={{
                  color: "rgb(59, 59, 59)",
                  fontFamily: "Bebas",
                  marginTop: "10px",
                  cursor: "default"
                }}
              >
                Redes sociais
              </h2>
              <div className="div-a-rodape-home">
                <a
                  className="a-rodape-home cursor-pointer"
                  href="https://www.facebook.com/Realponto"
                >
                  <FacebookFilled style={{ marginRight: "7px" }} />
                  Facebook
                </a>
                <a
                  className="a-rodape-home cursor-pointer"
                  href="https://www.instagram.com/realponto_oficial/?hl=pt"
                >
                  <InstagramFilled style={{ marginRight: "7px" }} />
                  Instagram
                </a>
                <a
                  className="a-rodape-home cursor-pointer"
                  href="https://www.realponto.com.br/"
                >
                  <ChromeFilled style={{ marginRight: "7px" }} />
                  Site oficial
                </a>
              </div>
            </div>
          </div>
          <div className="div-developed-rodape-home">
            © Developed by Jessi Leandro e Guilherme Stain
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

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(HomePage);
