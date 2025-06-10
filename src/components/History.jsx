import React from "react";
import Girl from "../assets/girl.jpg";

function History() {
  return (
    <section className="history-container">
      <div className="history-text">
        <div className="title">
          <h1>Quem é a octa?</h1>
        </div>
        <p className="title__history">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          eaque, saepe ad cum unde, ut iste facilis enim impedit, voluptatem
          aperiam reprehenderit iure aut. Aut quaerat necessitatibus quasi quia
          eum.
        </p>
      </div>
      <div className="history-image">
        <img src={Girl} alt="Garota" />
      </div>
    </section>
  );
}

export default History;
