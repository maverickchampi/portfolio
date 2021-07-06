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
      <a href={urlLink} target="_blank" rel="noreferrer" className={classLink}>
        {/* <Link to={urlLink} className={classLink}> */}
        <div className={classDiv}>
          <i className={classIcon} />
          <img src={urlImg} alt={altImg} className={classImg} />
        </div>
        {/* </Link> */}
      </a>
    </>
  );
};

export default SquareItem;
