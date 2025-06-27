import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar__itens">
        <li></li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li className="navbar__dropdown">
          <a href="#">Clientes</a>
          <div className="navbar__dropdown--itens">
            <a href="https://contakconsultoria.com.br">Contak Consultoria</a>
          </div>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
