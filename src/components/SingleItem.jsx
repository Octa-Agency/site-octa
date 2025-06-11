import React from "react";
import brandingIcon from "../assets/branding.png";
function SingleItem() {
  return (
    <div className="single-item__container">
      <img src={brandingIcon} alt="" />
      <h2>Branding</h2>
      <p>
        Lorem um is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  );
}

export default SingleItem;
