import React from "react";
import { Link } from "react-router-dom";

const SquareItem = ({
  urlLink,
  classLink,
  classDiv,
  classIcon,
  urlImg,
  altImg,
  classImg,
}) => {
  return (
    <>
      <Link to={urlLink} className={classLink}>
        <div className={classDiv}>
          <i className={classIcon} />
          <img src={urlImg} alt={altImg} className={classImg} />
        </div>
      </Link>
    </>
  );
};

export default SquareItem;
