import React from "react";
import "./style.css";
import Cards from "./cards/Cards";
import StartOver from './start_over/StartOver';


function App() {
  let cards=[];
  for(let i = 1; i < 25; i++){//[1,...,24] number of cards
    cards.push(i);
  }
  return (
    <div className="container">

    <h1  className='header'>
        Memory Game
    </h1>
    <StartOver />
    <Cards cards={cards}/>
    
    </div>
  );
}

export default App;
