import React, { useEffect } from "react";
import SquareItem from "../components/atom/SquareItem";
import { selectLink } from "../constant/Utils";
import "../assets/styles/projects.css";
import "../assets/styles/about.css";

const Projects = () => {
  useEffect(() => {
    selectLink("projects");
  }, []);

  return (
    <>
      <main className="projects">
        <div className="container">
          <div className="projects__content">
            <div className="content__title">
              <div>
                <h1>Mis proyectos</h1>
                <i className="fab fa-git-alt" />
              </div>
              <p>
                Estos son mis mejores proyectos, además puedes seguir viendo más
                proyectos en mi{" "}
                <a
                  href="https://github.com/maverickchampi"
                  target="_blank"
                  rel="noreferrer"
                  className="link__important"
                >
                  Git Hub.
                </a>
              </p>
            </div>
            <div className="content__cards">
              <SquareItem
                urlLink="https://maverick-central.herokuapp.com/"
                classLink="link-style"
                classDiv="link-hover-2"
                classIcon="far fa-eye"
                urlImg="https://i.ibb.co/j6B4TQT/central.png"
                altImg="Central"
                classImg="link__img-item"
              />
              <SquareItem
                urlLink="https://maverickchampi.herokuapp.com/"
                classLink="link-style"
                classDiv="link-hover-2"
                classIcon="far fa-eye"
                urlImg="https://i.ibb.co/tKNgxbg/portfolio.png"
                altImg="Portfolio"
                classImg="link__img-item"
              />
              <SquareItem
                urlLink="https://maverickchampi.github.io/moonConf/"
                classLink="link-style"
                classDiv="link-hover-2"
                classIcon="far fa-eye"
                urlImg="https://i.ibb.co/7pK4th0/moonConf.png"
                altImg="MoonConf"
                classImg="link__img-item"
              />
              <SquareItem
                urlLink="https://maverick-portfolio.herokuapp.com/nexflix.html"
                classLink="link-style"
                classDiv="link-hover-2"
                classIcon="far fa-eye"
                urlImg="https://i.ibb.co/LSY1q92/nexflix.png"
                altImg="Nexflix"
                classImg="link__img-item"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
