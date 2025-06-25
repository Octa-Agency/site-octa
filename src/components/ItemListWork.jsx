import React from "react";
import SigleItemWork from "./SigleItemWork";
import { WorksArray } from "../assets/database/works";

export const ItemListWork = ({ itemsworks }) => {
  return (
    <div className="bgg1">
      <h1 className="item-list-work__title">Nossos Trabalhos</h1>
      {WorksArray.slice(0, 1).map((currentObj, index) => (
        <SigleItemWork
          key={index}
          image={currentObj.image}
          name={currentObj.name}
          text={currentObj.text}
          link={currentObj.link}
        />
      ))}
    </div>
  );
};
