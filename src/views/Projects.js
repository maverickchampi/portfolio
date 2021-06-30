import React, { useEffect } from "react";
import { selectLink } from "../constant/Utils";

const Projects = () => {
  useEffect(() => {
    selectLink("projects");
  }, []);

  return (
    <>
      <h1>Projects</h1>
    </>
  );
};

export default Projects;
