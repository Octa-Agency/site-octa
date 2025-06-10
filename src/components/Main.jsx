import React from "react";
import alga from "../assets/algas.png";
import logo from "../assets/logo3.png";
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
    </>
  );
}

export default Main;
