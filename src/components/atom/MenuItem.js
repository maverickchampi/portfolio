import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ id, to, classLink, classIcon, text }) => {
  return (
    <>
      <Link id={id} to={to} className={classLink}>
        <i className={classIcon}></i>
        <span>{text}</span>
      </Link>
    </>
  );
};

export default MenuItem;
