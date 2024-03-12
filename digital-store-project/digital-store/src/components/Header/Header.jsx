import React from "react";
import "./Header.css";
import Container from "../Container/Container";
import logo from "../../assets/images/logo.png";
import faceIcon from "../../assets/images/faceIcon.svg";
import instaIcon from "../../assets/images/instaIcon.svg";
import whatsIcon from "../../assets/images/whatsIcon.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header-page">
      <Container>
        <div className="header-flex">
          {/* Box que contem a LOGO e as Redes Sociais */}
          <div className="logo-social-box">
            {/* Logo */}
            <img
              className="header-logo"
              src={logo}
              alt="logo"
              width={45}
              height={45}
            />

            {/* Redes Sociais */}
            <div className="social-box">
              <h3>Redes Sociais</h3>
              <div className="social-icons-box">
                <a href="">
                  <img
                    src={instaIcon}
                    alt="Icon instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="">
                  <img
                    src={faceIcon}
                    alt="Icon facebook"
                    width={19.86}
                    height={19.87}
                  />
                </a>
                <a href="">
                  <img
                    src={whatsIcon}
                    alt="Icon whatsapp"
                    width={19.9}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Nav */}
          <Nav />

          {/* Buscar Produtos */}
          <div className="search-box">
            <form action="">
              <input type="text" placeholder="Buscar" />
            </form>
            <img src={searchIcon} alt="" width={20} height={20} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
