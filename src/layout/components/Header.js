import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="link-style header__link">
            <img
              src="https://i.ibb.co/Rh9Ywbm/logo.png"
              className="header__logo"
              alt="Logo de portafolio"
            ></img>
          </Link>

          <nav className="menu">
            <div className="container">
              <ul>
                <li>
                  <Link id="home" to="/" className="link-style menu__link">
                    <i class="fas fa-home"></i>
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    id="about"
                    to="/about"
                    className="link-style menu__link"
                  >
                    <i class="fas fa-address-card"></i>
                    <span>Sobre mi</span>
                  </Link>
                </li>
                <li>
                  <Link
                    id="projects"
                    to="/projects"
                    className="link-style menu__link"
                  >
                    <i class="fas fa-folder-open"></i>
                    <span>Proyectos</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
