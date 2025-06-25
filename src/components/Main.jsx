import React from "react";
import alga from "../assets/algas.png";
import logo from "../assets/logo3.png";
import History from "./History";
import ItemList from "./ItemList";
import teste from "../assets/database/teste.png";
import Contact from "./Contact";
import SigleItemWork from "./SigleItemWork";
import { ItemListWork } from "./ItemListWork";

function Main() {
  return (
    <>
      <div className="main">
        <div className="main-banner"></div>
        <div className="tittle">
          <img src={logo} alt="" />
          <div className="tittle__subtittle">
            <p>
              Lorem um is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <button
            className="button"
            onClick={() =>
              document
                .getElementById("contato")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Melhore Seu Negócio
          </button>
        </div>
        <div className="alga">
          <img src={alga} alt="" />
        </div>
      </div>
      <History />
      <ItemList items={7} />
      <Contact />
      <ItemListWork />
    </>
  );
}

export default Main;
