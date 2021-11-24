import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <img
        onClick={() => {
          if (props.answers.includes(props.img)) return;
          if (props.selectedImg === props.img) {
            const newArr = props.answers;
            newArr.push(props.img);
            props.setAnswers(newArr);
          }

          props.setImgID(props.index);
          props.setSelectedImg(props.img);
        }}
        className="cardCover"
        src={
          props.imgID === props.index || props.answers.includes(props.img)
            ? "/images/" + props.img + ".jpg"
            : "/images/0.jpg"
        }
        alt="cover"
      />
    </div>
  );
}

export default Card;
