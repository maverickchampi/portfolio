import React from "react";

const RectangleItem = ({
  urlLink,
  classLink,
  classDiv,
  urlImg,
  altImg,
  classImg,
}) => {
  return (
    <>
      <a href={urlLink} target="_blank" rel="noreferrer" className={classLink}>
        <div className={classDiv}>
          <img src={urlImg} alt={altImg} className={classImg} />
        </div>
      </a>
    </>
  );
};

export default RectangleItem;
