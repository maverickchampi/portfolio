import React from "react";

const CertificatesItem = ({ urlLink, classLink, urlImg, altImg, classImg }) => {
  return (
    <>
      <a href={urlLink} target="_blank" rel="noreferrer" className={classLink}>
        <img src={urlImg} alt={altImg} className={classImg} />
      </a>
    </>
  );
};

export default CertificatesItem;
