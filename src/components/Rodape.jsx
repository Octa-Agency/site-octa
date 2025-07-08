import React from "react";
import logo3 from "../assets/logo3.png";

function Rodape() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo3} alt=""></img>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Octa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Rodape;
