import React from "react";
import Header from "./components/Header";
import Background from "./components/Background";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Background />
      {props.children}
    </>
  );
};

export default Layout;
