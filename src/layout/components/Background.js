import React from "react";
import Particles from "react-particles-js";
import { params } from "../../constant/Params";
import "../../assets/styles/background.css";

const Background = () => {
  return (
    <>
      <Particles params={params} className="background" />
    </>
  );
};

export default Background;
