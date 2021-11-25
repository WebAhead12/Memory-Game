import React from "react";
import "./style.css";
import Card from "./card/Card";
import { createArrayOfCards } from "../../utils/funcHandlers";

function Cards(props) {
  let row = createArrayOfCards(4); //an array to set 4 rows horizontal divs dynamiclly in column.
  let column = createArrayOfCards(6); //an array to set 6 cards in a row dynamiclly
  return (
    <div className="cardsContainer">
      {/* create 4*6 container */}
      {row.map((cardsHolder, index) => {
        return (
          <div key={index} className={"row" + (index + 1).toString()}>
            {column.map((cards, idx) => {
              return (
                <Card
                  key={props.cards[idx + index * 6]}
                  imgTag={props.cards[idx + index * 6]} //0-23
                  imgName={props.cards[idx + index * 6] % 12} //0-11
                  flag={props.flag}
                  setFlag={props.setFlag}
                  counter={props.counter}
                  setCounter={props.setCounter}
                  clicked={props.clicked}
                  setClicked={props.setClicked}
                  isActive={props.isActive}
                  setActive={props.setActive}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
