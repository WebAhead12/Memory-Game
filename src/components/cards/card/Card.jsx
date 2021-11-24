import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <img
        onClick={() => {
          if (props.answers.includes(props.img)) return;

          if (props.selectedImg === props.img && props.index !== props.currentLocation) {
            props.setAnswers(props.answers.concat(props.img));
          }

          props.setCurrentLocation(props.index);
          props.setSelectedImg(props.img);
        }}
        className="cardCover"
        src={
          props.currentLocation === props.index || props.answers.includes(props.img)
            ? "/images/" + props.img + ".jpg"
            : "/images/0.jpg"
        }
        alt="cover"
      />
    </div>
  );
}

export default Card;
