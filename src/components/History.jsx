import React from "react";
import poster from "../assets/bannerHome.png";

function History() {
  return (
    <>
      <div className="history-container" id="sobre">
        <div className="history-text">
          <div className="title">
            <h1>Quem é a Octa?</h1>
          </div>
          <p className="title__history">
            Hoje, a Agência Octa é reconhecida não apenas por seu talento em
            publicidade, mas também por seu compromisso em construir um mundo
            onde a comunicação une as pessoas.
            <br />
            <br />
            Combinamos arte, design e tecnologia para criar experiências visuais
            que encantam e engajam. Cada projeto é encarado como uma
            oportunidade de transformar vidas, opiniões e conexões — com
            interfaces intuitivas, estéticas marcantes e um olhar criativo.
            <br />
            <br />
            Fazemos da Octa uma verdadeira agente de mudanças na sociedade, onde
            cada pixel tem propósito e cada detalhe comunica.
          </p>
        </div>
        <div className="history-image">
          <img src={poster} alt="image error" />
        </div>
      </div>
    </>
  );
}

export default History;
