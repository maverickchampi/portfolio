import React, { useEffect } from "react";
import CertificatesItem from "../components/atom/CertificatesItem";
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
                      className="about__link"
                    >
                      Linkedin
                    </a>
                    , además también puedes ver todos mis{" "}
                    <a
                      href="https://drive.google.com/drive/folders/17o659Dj1s1u_cjBiTj3kP4l2PZ45fj84?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="about__link"
                    >
                      certificados.
                    </a>
                  </p>
                  <h3>Estudios</h3>
                  <ul>
                    <li>{">"} I.E.S Cibertec - Computación e Informática</li>
                    <li>{">"} Platzi</li>
                    <li>{">"} Udemy</li>
                    <li>{">"} Crehana</li>
                  </ul>
                </div>
              </section>
              <section className="content__certificates">
                <CertificatesItem
                  urlLink="https://drive.google.com/drive/folders/15ez4kmCxYboSe4ShXfYMHrlv931E5jB3?usp=sharing"
                  classLink="link-style"
                  urlImg="https://i.ibb.co/nR42c3x/frontend-js.png"
                  altImg="Certificados Escuela JS Platzi"
                  classImg=""
                />
                <CertificatesItem
                  urlLink="https://drive.google.com/drive/folders/1cT7GO1ug-Se0qLvLiKhjWb2ggtX7Eas9?usp=sharing"
                  classLink="link-style"
                  urlImg="https://i.ibb.co/fGDKG8Y/cibertec.png"
                  altImg="Certificados Cibertec"
                  classImg=""
                />
                <CertificatesItem
                  urlLink="https://drive.google.com/drive/folders/1cT7GO1ug-Se0qLvLiKhjWb2ggtX7Eas9?usp=sharing"
                  classLink="link-style"
                  urlImg="https://i.ibb.co/gg9QHW3/fundamentos.png"
                  altImg="Certificados Escuela JS Platzi"
                  classImg="img-show"
                />
                <CertificatesItem
                  urlLink="https://drive.google.com/drive/folders/15ez4kmCxYboSe4ShXfYMHrlv931E5jB3?usp=sharing"
                  classLink="link-style"
                  urlImg="https://i.ibb.co/6v6TWst/git.png"
                  altImg="Certificados Escuela JS Platzi"
                  classImg="img-show"
                />
              </section>
            </div>
            {/* <h4
              style={{
                textAlign: "center",
                fontSize: "1.5em",
                // margin: "5px 0",
              }}
            >
              Skills
            </h4> */}
            <div className="content__card">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
