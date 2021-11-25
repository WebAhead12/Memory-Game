import React from "react";
import "./style.css";
import Card from "./card/Card";
import { createArrayOfCards } from "../../utils/funcHandlers";

function Cards(props) {
  let column = createArrayOfCards(4); //an array to set 4 rows horizontal divs dynamiclly in column.
  let row = createArrayOfCards(6); //an array to set 6 cards in a row dynamiclly

  return (
    <div className="cardsContainer">
      {column.map((cardsHolder, index) => {
        return (
          <div key={index} className={"row" + (index + 1).toString()}>
            {row.map((cards, idx) => {
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
