import React from "react";

const SigleItemWork = ({ image, name, text, link }) => {
  return (
    <div className="single-item-work__container">
      <a href={link}>
        <img src={image} className="img-work" />
      </a>
      <h2>{name}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SigleItemWork;
