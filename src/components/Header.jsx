import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar__itens">
        <li></li>
        <li>
          <button
            className="navbar__itens--button"
            onClick={() =>
              document
                .getElementById("sobre")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            className="navbar__itens--button"
            onClick={() =>
              document
                .getElementById("clientes")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Clientes
          </button>
        </li>
        <li>
          <button
            className="navbar__itens--button"
            onClick={() =>
              document
                .getElementById("contato")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
