import React from "react";
import "./style.css";
import Card from "./card/Card";
import { createArrayOfCards } from "../../utils/funcHnadlers";

function Cards(props) {
  let array = createArrayOfCards(6); //an array to set 6 cards in a row dynamiclly

  // newShuffle(props.cards); //random permutations to change the place of the cards

  // console.log(props.cards);
  return (
    <div className="cardsContainer">
      <div className="row1">
        {array.map((card, idx) => {
          return (
            <Card
              key={idx}
              img={props.cards[idx]} //1-12
              index={idx} //1-24
              imgID={props.imgID}
              setImgID={props.setImgID}
            />
          );
        })}
      </div>
      <div className="row2">
        {array.map((card, idx) => {
          return (
            <Card
              key={idx + 6}
              img={props.cards[idx + 6]}
              index={idx + 6}
              imgID={props.imgID}
              setImgID={props.setImgID}
            />
          );
        })}
      </div>
      <div className="row3">
        {array.map((card, idx) => {
          return (
            <Card
              key={idx + 12}
              img={props.cards[idx + 12]}
              index={idx + 12}
              imgID={props.imgID}
              setImgID={props.setImgID}
            />
          );
        })}
      </div>
      <div className="row4">
        {array.map((card, idx) => {
          return (
            <Card
              key={idx + 18}
              img={props.cards[idx + 18]}
              index={idx + 18}
              imgID={props.imgID}
              setImgID={props.setImgID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
