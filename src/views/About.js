import React, { useEffect } from "react";
import RectangleItem from "../components/atom/RectangleItem";
import CardItem from "../components/atom/CardItem";
import { selectLink } from "../constant/Utils";
import "../assets/styles/about.css";

const About = () => {
  useEffect(() => {
    selectLink("about");
  }, []);

  return (
    <>
      <main className="about">
        <div className="container">
          <div className="about__content">
            <div className="content__container">
              <section className="content__description">
                <div>
                  <img
                    src="https://i.ibb.co/jWPrBvd/201911922.jpg"
                    alt="Fotografía de Maverick"
                    className=""
                  />
                  <h2>Maverick Champi</h2>
                  <p>
                    Apasionado a la tecnología, especializado en el desarrollo
                    web. Buscando aprender y solucionar problemas, me gustan los
                    retos y más cuando trabajo en equipo. Mis pasatiempos son
                    hacer deportes, ver series y viajar. Puedes visitar mi{" "}
                    <a
                      href="https://www.linkedin.com/in/maverickchampi/"
                      target="_blank"
                      rel="noreferrer"
                      className="link__important"
                    >
                      Linkedin
                    </a>
                    , además también puedes ver todos mis{" "}
                    <a
                      href="https://drive.google.com/drive/folders/17o659Dj1s1u_cjBiTj3kP4l2PZ45fj84?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="link__important"
                    >
                      certificados.
                    </a>
                  </p>
                  <h3>Estudios</h3>
                  <ul>
                    <li>{">"} I.E.S Cibertec - Computación e Informática</li>
                    <li>{">"} Platzi</li>
                    <li>{">"} EdTeam</li>
                    <li>{">"} Udemy</li>
                  </ul>
                </div>
              </section>
              <section className="content__certificates">
                <RectangleItem
                  urlLink="https://drive.google.com/drive/folders/15ez4kmCxYboSe4ShXfYMHrlv931E5jB3?usp=sharing"
                  classLink="link-style"
                  classDiv="link-hover"
                  urlImg="https://i.ibb.co/nR42c3x/frontend-js.png"
                  altImg="Certificados Escuela JS Platzi"
                  classImg="link__img-item"
                />
                <RectangleItem
                  urlLink="https://drive.google.com/drive/folders/17N4hg2ZpMWBJZmqo8saOxhVwrQwTMZ8x?usp=sharing"
                  classLink="link-style"
                  classDiv="link-hover"
                  urlImg="https://i.ibb.co/t3VhLxz/certificado-curso-api-rest.png"
                  altImg="Certificados EdTeam"
                  classImg="link__img-item"
                />
                <RectangleItem
                  urlLink="https://drive.google.com/drive/folders/15ez4kmCxYboSe4ShXfYMHrlv931E5jB3?usp=sharing"
                  classLink="link-style"
                  classDiv="link-hover"
                  urlImg="https://i.ibb.co/6v6TWst/git.png"
                  altImg="Certificados Escuela JS Platzi"
                  classImg="link__img-item img-show"
                />
                <RectangleItem
                  urlLink="https://drive.google.com/drive/folders/1cT7GO1ug-Se0qLvLiKhjWb2ggtX7Eas9?usp=sharing"
                  classLink="link-style"
                  classDiv="link-hover"
                  urlImg="https://i.ibb.co/fGDKG8Y/cibertec.png"
                  altImg="Certificados Cibertec"
                  classImg="link__img-item img-show"
                />
              </section>
            </div>
            <div className="content__card">
              <CardItem
                classIcon="fas fa-database"
                titleCard="Databases"
                items={["MySql", "Sql Server", "Oracle"]}
              />
              <CardItem
                classIcon="fas fa-server"
                titleCard="Backend"
                items={["Java", "Spring", "C#"]}
              />
              <CardItem
                classIcon="fas fa-laptop"
                titleCard="Frontend"
                classUl="column-grid-frontend"
                items={[
                  "JavaScript",
                  "React Js",
                  "Angular",
                  "TypeScript",
                  "Html",
                  "Pug",
                  "Css",
                  "Bootstrap",
                  "Sass",
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
