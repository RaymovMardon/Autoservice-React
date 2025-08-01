import React from "react";

const Card = ({ img, p }) => {
 

  return (
    <>
     
        <div className="service-card">
          <i class={img}></i>
          <p>{p}</p>
        </div>
      
    </>
  );
};

export default Card;
