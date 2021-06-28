import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { selectLink } from "../constant/Utils";
import "../assets/styles/home.css";

const Home = () => {
  useEffect(() => {
    selectLink("home");
  }, [selectLink]);

  return (
    <>
      <main className="home">
        <div className="container">
          <div class="home__content">
            <h1 class="content__title">
              Hola,
              <br />
              Soy{" "}
              <span class="important" translate="no">
                Maverick Champi
              </span>
              ,<br />
              Desarrollador Web<span class="pointer">.</span>
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
