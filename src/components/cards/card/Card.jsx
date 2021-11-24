import React from "react";
import "./style.css";
// import image from '../images/0.jpg';

function Card(props) {
  // const [imgUrl, setImgUrl] = React.useState('0.jpg')
  return (
    <div className="card">
      <img className="cardCover" src={"/images/0.jpg"} alt="cover" />
    </div>
  );
}

export default Card;
