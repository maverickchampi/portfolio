import React, { useEffect } from "react";
import { selectLink } from "../constant/Utils";

const About = () => {
  useEffect(() => {
    selectLink("about");
  }, [selectLink]);

  return (
    <>
      <h1>About</h1>
    </>
  );
};

export default About;
