import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <img
        onClick={() => props.setImgID(props.index)}
        className="cardCover"
        src={
          props.imgID === props.index
            ? "/images/" + props.img + ".jpg"
            : "/images/0.jpg"
        }
        alt="cover"
      />
    </div>
  );
}

export default Card;
