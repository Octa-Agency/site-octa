import React from "react";
import alga from "../assets/algas.png";
import logo from "../assets/logo3.png";
import History from "./History";
import ItemList from "./ItemList";
import teste from "../assets/database/teste.png";

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
          <button className="button">Button</button>
        </div>
        <div className="alga">
          <img src={alga} alt="" />
        </div>
      </div>
      <History />
      <img src={teste} alt="" className="teste" />
      <div className="testebg"></div>
      <ItemList items={7} />
    </>
  );
}

export default Main;
