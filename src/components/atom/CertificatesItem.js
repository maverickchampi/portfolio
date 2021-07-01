import React from "react";

const CertificatesItem = ({
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

export default CertificatesItem;
