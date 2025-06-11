import React from "react";
import SingleItem from "./SingleItem";

function ItemList() {
  return (
    <>
      <h1 className="item-list__tittle">Nossas Especialidades:</h1>
      <div className="item-list__container">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </>
  );
}

export default ItemList;
