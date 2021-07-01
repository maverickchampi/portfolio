import React from "react";

const CardItem = ({ classIcon, titleCard, classUl = "", items }) => {
  return (
    <>
      <div>
        <i className={classIcon}></i>
        <h4>{titleCard}</h4>
        <ul className={classUl}>
          {items.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardItem;
