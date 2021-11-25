import React from "react";
import "./style.css";

function Card(props) {
  const handleClick = () => {
    //first if checks if the clicked card is not chosen before
    if (
      !props.clicked.includes(props.imgTag) &&
      !props.flag.includes(props.imgTag)
    ) {
      props.setCounter(props.counter + 1);
      const clickedArr = props.clicked;
      clickedArr.push(props.imgTag);
      props.setClicked(clickedArr);
      props.setActive(!props.isActive);

      //counter is odd => two images have been clicked
      if (props.counter % 2) {
        //always two images in clicked array..so we compare if they have the same photo ans store it to flag
        if (props.clicked[0] % 12 === props.clicked[1] % 12) {
          const newFlag = props.flag;
          newFlag.push(props.clicked[0]);
          newFlag.push(props.clicked[1]);
          props.setFlag(newFlag);
          props.setClicked([]); //reset clicked array
          props.setActive(!props.isActive);
        } else {
          setTimeout(() => {
            props.setClicked([]); //reset clicked array after .4s to show the 2 chosen unmatched photos
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
          //if the image in clicked array or it one of the founded pairs it will be uncovered
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
