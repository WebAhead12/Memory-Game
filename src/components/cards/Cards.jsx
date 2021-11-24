import React from "react";
import "./style.css";
import Card from './card/Card'
import {newShuffle, createArrayOfCards} from '../../utils/funcHnadlers'

function Cards(props) {
  
  let array = createArrayOfCards(6);//an array to set 6 cards in a row dynamiclly

  newShuffle(props.cards)//random permutations to change the place of the cards

  // console.log(props.cards);
  return (
    <div className="cardsContainer">
      <div className="row1">
      {
      array.map((card, idx) =>{
          return <Card key={props.cards[idx]}/>
      })
      }
      </div>
      <div className="row2">
      {
      array.map((card, idx) =>{
          return <Card key={props.cards[idx+6]}/>
      })
      }
      </div>
      <div className="row3">
      {
      array.map((card, idx) =>{
          return <Card key={props.cards[idx+12]}/>
      })
      }
      </div>
      <div className="row4">
      {
      array.map((card, idx) =>{
          return <Card key={props.cards[idx+18]}/>
      })
      }
      </div>
      
    </div>
  );
}

export default Cards;
