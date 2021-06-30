import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { selectLink } from "../constant/Utils";
import "../assets/styles/home.css";

const Home = () => {
  useEffect(() => {
    selectLink("home");
  }, []);

  return (
    <>
      <main className="home">
        <div className="container">
          <div className="home__content">
            <h1 className="content__title">
              Hola,
              <br />
              Soy{" "}
              <span className="important" translate="no">
                Maverick Champi
              </span>
              ,<br />
              Desarrollador Web<span className="pointer">.</span>
            </h1>
            <Link to="/about" className="link-style home__link">
              Conóceme más
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
