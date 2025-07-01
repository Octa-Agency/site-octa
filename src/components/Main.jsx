import React from "react";
import alga from "../assets/algas.png";
import logo from "../assets/logo3.png";
import History from "./History";
import ItemList from "./ItemList";
import Contact from "./Contact";
import { ItemListWork } from "./ItemListWork";
import useScrollReveal from "../scripts/useScrollReveal";
import tiraDecorativa from "../assets/linhaDecorativa.png";
import algaPq from "../assets/algas-pq.png";
import Rodape from "./Rodape";

function Main() {
  useScrollReveal();
  return (
    <>
      <div className="main">
        <div className="main-banner"></div>
        <div className="tittle">
          <img src={logo} alt="" />
          <div className="tittle__subtittle">
            <p>
              Comunicação que transforma, design que conecta, propósito em cada
              pixel.
            </p>
          </div>
          <button
            className="main__button"
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
          <picture>
            <source media="(max-width: 1024px)" srcSet={algaPq} />
            <img src={alga} alt="" />
          </picture>
        </div>
      </div>
      <div className="reveal">
        <History />
      </div>
      <div>
        <img
          src={tiraDecorativa}
          className="tira-decorativa"
          alt="image error"
        />
      </div>
      <div className="reveal">
        <ItemList items={7} />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <div className="reveal">
        <ItemListWork />
      </div>
      <div>
        <Rodape />
      </div>
    </>
  );
}

export default Main;
