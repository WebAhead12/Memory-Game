import React from "react";
import "./style.css";

function Card(props) {
  const handleClick = () => {
    if (
      !props.clicked.includes(props.imgTag) &&
      !props.flag.includes(props.imgTag)
    ) {
      props.setCounter(props.counter + 1);
      const clickedArr = props.clicked;
      clickedArr.push(props.imgTag);
      props.setClicked(clickedArr);
      props.setActive(!props.isActive);

      if (props.counter % 2) {
        //counter is odd => two images have been clicked
        if (props.clicked[0] % 12 === props.clicked[1] % 12) {
          const newFlag = props.flag;
          newFlag.push(props.clicked[0]);
          newFlag.push(props.clicked[1]);
          props.setFlag(newFlag);
          props.setClicked([]);
          props.setActive(!props.isActive);
        } else {
          setTimeout(() => {
            props.setClicked([]);
            props.setActive(!props.isActive);
          }, 400);
        }
      }
    }
  };

  return (
    <div className="card">
      <img
        onClick={handleClick}
        className="cardCover"
        src={
          props.clicked.includes(props.imgTag) ||
          props.flag.includes(props.imgTag)
            ? "/images/" + props.imgName + ".jpg"
            : "/images/24.jpg"
        }
        alt="img"
      />
    </div>
  );
}

export default Card;
