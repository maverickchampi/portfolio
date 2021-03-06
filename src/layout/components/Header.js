import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../components/atom/MenuItem";
import { linkHome, linkAbout, linkProjects } from "../../constant/Utils";
import "../../assets/styles/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to={linkHome} className="link-style header__link">
            <img
              src="https://i.ibb.co/Rh9Ywbm/logo.png"
              className="header__logo"
              alt="Logo"
            />
          </Link>

          <nav className="menu">
            <div className="container">
              <ul>
                <li>
                  <MenuItem
                    id="home"
                    to={linkHome}
                    classLink="link-style menu__link"
                    classIcon="fas fa-home"
                    text="Inicio"
                  />
                </li>
                <li>
                  <MenuItem
                    id="about"
                    to={linkAbout}
                    classLink="link-style menu__link"
                    classIcon="fas fa-address-card"
                    text="Sobre mi"
                  />
                </li>
                <li>
                  <MenuItem
                    id="projects"
                    to={linkProjects}
                    classLink="link-style menu__link"
                    classIcon="fas fa-folder-open"
                    text="Proyectos"
                  />
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
