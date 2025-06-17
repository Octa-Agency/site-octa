import React from "react";

const SingleItem = ({ image, text, tittle }) => {
  return (
    <div className="single-item__container">
      <img src={image} alt="Image error" />
      <h2>{tittle}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SingleItem;
