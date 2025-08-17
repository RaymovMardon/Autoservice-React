import React, { useState } from "react";

const Card = ({ img, p, info }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="service-card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="card-front">
          <i className={img}></i>
          <p>{p}</p>
        </div>

        {/* Back */}
        <div className="card-back">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
