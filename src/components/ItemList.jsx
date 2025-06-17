import React from "react";
import SingleItem from "./SingleItem";
import { iconsArray } from "../assets/database/icons";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="bgg">
        <h1 className="item-list__tittle">Nossas Especialidades</h1>
        <div className="item-list__container">
          {iconsArray.slice(0, items).map((currentObj, index) => (
            <SingleItem
              key={index}
              image={currentObj.image}
              tittle={currentObj.tittle}
              text={currentObj.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
