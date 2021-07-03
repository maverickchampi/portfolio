import React from "react";
import "../assets/styles/notFound.css";
import image from "../assets/images/404.svg";

const NotFound = () => {
  return (
    <>
      <main className="notFound">
        <div className="container">
          <img src={image} alt="Not Found"></img>
          <h1>No encontrado</h1>
        </div>
      </main>
    </>
  );
};

export default NotFound;
