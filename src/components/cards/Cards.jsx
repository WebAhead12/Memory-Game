import React from "react";
import "./style.css";
import Card from './card/Card'

function Cards(props) {
  let array=[];
  for(let i = 1; i < 7; i++){
    array.push(i);
  }
  return (
    <div className="cardsContainer">
      <div className="row1">
      {
      array.map((card, idx) =>{
          return <Card key={idx}/>
      })
      }
      </div>
      <div className="row2">
      {
      array.map((card, idx) =>{
          return <Card key={idx+6}/>
      })
      }
      </div>
      <div className="row3">
      {
      array.map((card, idx) =>{
          return <Card key={idx+12}/>
      })
      }
      </div>
      <div className="row4">
      {
      array.map((card, idx) =>{
          return <Card key={idx+18}/>
      })
      }
      </div>
      
    </div>
  );
}

export default Cards;
